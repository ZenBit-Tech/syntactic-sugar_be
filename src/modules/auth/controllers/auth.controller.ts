import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Inject,
  Post,
  Query,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { Routes, Services } from 'src/utils/constants';
import { IUserService } from 'src/modules/user/interfaces/IUserService';
import { IAuthService } from 'src/modules/auth/interfaces/IAuthService';
import { CreateUserDto } from 'src/modules/user/dtos/createUser.dto';
import { ConfirmAccountDto } from 'src/modules/auth/dtos/confirmAccont.dto';
import { ApiBody, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { TokenDto } from '../dtos/token.dto';

@ApiTags('auth')
@Controller(Routes.AUTH)
export class AuthController {
  constructor(
    @Inject(Services.AUTH) private authService: IAuthService,
    @Inject(Services.USER) private userService: IUserService,
  ) {}

  @ApiBody({ type: CreateUserDto })
  @ApiResponse({ status: 200, description: 'insert user to db' })
  @Post(Routes.REGISTER)
  @UsePipes(ValidationPipe)
  register(@Body() createUserDto: CreateUserDto) {
    return this.authService.registration(createUserDto);
  }

  @ApiQuery({ name: 'id' })
  @ApiResponse({
    status: 200,
    description: 'updated field isActivated=true for user',
  })
  @Get(Routes.CONFIRM)
  confirm(@Query(ValidationPipe) query: ConfirmAccountDto) {
    return this.authService.confirmEmail(query.id);
  }

  @ApiBody({ type: CreateUserDto })
  @ApiResponse({ status: 200, description: 'Login user' })
  @Post(Routes.LOGIN)
  @UsePipes(ValidationPipe)
  @UseInterceptors(ClassSerializerInterceptor)
  login(@Body() userDto: CreateUserDto) {
    return this.authService.login(userDto);
  }

  @ApiBody({ type: TokenDto })
  @ApiResponse({ status: 200, description: 'Login user' })
  @Post(Routes.GOOGLE_LOGIN)
  @UsePipes(ValidationPipe)
  @UseInterceptors(ClassSerializerInterceptor)
  loginByGoogle(@Body('token') token: string) {
    return this.authService.loginByGoogle(token);
  }
}
