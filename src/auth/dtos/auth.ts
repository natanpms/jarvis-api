import { ApiProperty } from '@nestjs/swagger';

export class SignUpDto {
    @ApiProperty({ example: 'Natan Silva', description: 'Nome do usuário', type: 'string', minLength: 5, maxLength: 100, required: true })
    name: string;

    @ApiProperty({ example: 'natan@email.com', description: 'Email do usuário', required: true })
    email: string;

    @ApiProperty({ example: '123456', description: 'Senha do usuário', required: true })
    password: string;
}

export class SignInDto {
    @ApiProperty({ example: 'natan@email.com', description: 'Email do usuário', required: true })
    email: string;

    @ApiProperty({ example: '123456', description: 'Senha do usuário', required: true })
    password: string;
}
