import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { MessagesValidators } from 'helpers/messagesValidators';

export class SignUpDto {
    @ApiProperty({ example: 'Natan Silva', description: 'Nome do usuário', type: 'string', minLength: 5, maxLength: 100, required: true })
    @IsNotEmpty({ message: MessagesValidators?.isNotEmpty })
    name: string;

    @ApiProperty({ example: 'natan@email.com', description: 'Email do usuário', required: true })
    @IsEmail({}, { message: MessagesValidators?.isEmail })
    email: string;

    @ApiProperty({ example: '123456', description: 'Senha do usuário', required: true })
    @IsNotEmpty({ message: MessagesValidators?.isNotEmpty })
    password: string;
}

export class SignInDto {
    @ApiProperty({ example: 'natan@email.com', description: 'Email do usuário', required: true })
    @IsEmail({}, { message: MessagesValidators?.isEmail })
    email: string;

    @ApiProperty({ example: '123456', description: 'Senha do usuário', required: true })
    @IsNotEmpty({ message: MessagesValidators?.isNotEmpty })
    password: string;
}


export class AuthResponseDto {
    acessToken: string;
}
