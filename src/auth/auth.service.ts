import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SignInDto, SignUpDto } from './dtos/auth';
import { PrismaService } from 'src/prisma/prisma.service';
import bcrypt from "bcrypt";

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService) { }

    async signUp(data: SignUpDto) {
        const userFound = await this.prisma.user.findUnique({
            where: {
                email: data.email
            }
        });

        if (userFound) {
            throw new UnauthorizedException('Já existe um usuário cadastrado com esse email.');
        }

        const passwordHash = await bcrypt.hash(data.password, 10);

        const newUser = await this.prisma.user.create({
            data: {
                ...data,
                password: passwordHash
            }
        });

        return {
            id: newUser.id,
            email: newUser.email,
            name: newUser.name
        }
    }


    async signIn(data: SignInDto) {
        const userLogged = await this.prisma.user.findUnique({
            where: {
                email: data.email
            }
        });

        if (!userLogged) {
            throw new UnauthorizedException('Não existe um usuário com esse email.');
        }

        const isPasswordValid = await bcrypt.compare(data.password, userLogged.password);

        if (!isPasswordValid) {
            throw new UnauthorizedException('Credenciais inválidas. Tente novamente.');
        }

        return {
            id: userLogged.id,
            email: userLogged.email,
            name: userLogged.name
        }

    }
}
