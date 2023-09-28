import { Body, ClassSerializerInterceptor, Controller, Post, UseInterceptors } from '@nestjs/common';

import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { User } from './user.entity';
import { AuthService } from './auth.service';
import { signInResponse } from './interface';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) { }

    @UseInterceptors(ClassSerializerInterceptor)
    @Post('/signup')
    signUp(@Body() authCredentialsDto: AuthCredentialsDto): Promise<User> {
        return this.authService.signUp(authCredentialsDto);
    }

    @Post('/signin')
    signIn(@Body() authCredentialsDto: AuthCredentialsDto): Promise<signInResponse> {
        return this.authService.signIn(authCredentialsDto);
    }
}
