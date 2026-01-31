import { Injectable } from '@nestjs/common';
import { SignInDto, SignUpDto } from './dtos/auth';

@Injectable()
export class AuthService {

    async signUp(data: SignUpDto) { }

    async signIn(data: SignInDto) { }
}
