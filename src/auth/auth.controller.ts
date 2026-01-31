import { Body, Controller, Post } from '@nestjs/common';
import { SignInDto, SignUpDto } from './dtos/auth';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private AuthService: AuthService) { }

    @Post('signup')
    async signUp(@Body() bodyRequest: SignUpDto) {
        return this.AuthService.signUp(bodyRequest);
    }

    @Post('signin')
    async signIn(@Body() bodyRequest: SignInDto) {
        await this.AuthService.signIn(bodyRequest);
    }

}
