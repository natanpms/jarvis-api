import { Body, Controller, Delete, Get, Post, Request, UseGuards } from '@nestjs/common';
import { SignInDto, SignUpDto } from './dtos/auth';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private AuthService: AuthService) { }

    @Post('signup')
    async signUp(@Body() bodyRequest: SignUpDto) {
        return this.AuthService.signUp(bodyRequest);
    }

    @Post('signin')
    async signIn(@Body() bodyRequest: SignInDto) {
        return this.AuthService.signIn(bodyRequest);
    }

    @UseGuards(AuthGuard)
    @Get('me')
    async me(@Request() request) {
        return request.user;
    }

}
