import { Controller, Post, Body, Get, UseGuards, Req } from '@nestjs/common'
import { UserService } from './user.service'
import { SignUpInputDto } from './dto/sign-up-input.dto'
import { SignInInputDto } from './dto/sign-in-input.dto'
import {
  ApiOperation,
  ApiTags,
  ApiBearerAuth,
  ApiOkResponse,
  ApiUnauthorizedResponse,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiBadRequestResponse,
  ApiConflictResponse,
  ApiInternalServerErrorResponse,
} from '@nestjs/swagger'
import { IsUserGuard } from 'guards/is-user.guard'
import { Request } from 'express'
import { UserMeDto } from './dto/user-profile.dto'
import { SignInDto } from './dto/sign-in.dto'
import { SignUpDto } from './dto/sign-up.dto'
import { SwaggerDecorators } from './constants/swagger-decorators'

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('me')
  @UseGuards(IsUserGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get authenticated user profile' })
  @ApiOkResponse(SwaggerDecorators.UserMe.OkResponse)
  @ApiUnauthorizedResponse(SwaggerDecorators.UserMe.UnauthorizedResponse)
  @ApiInternalServerErrorResponse(
    SwaggerDecorators.UserMe.InternalServerErrorResponse
  )
  async userMe(@Req() req: Request): Promise<UserMeDto> {
    return req.user
  }

  @Post('sign-in')
  @ApiOperation({ summary: 'Sign in user' })
  @ApiCreatedResponse(SwaggerDecorators.SignIn.CreatedResponse)
  @ApiBadRequestResponse(SwaggerDecorators.SignIn.BadRequestResponse)
  @ApiForbiddenResponse(SwaggerDecorators.SignIn.ForbiddenResponse)
  @ApiInternalServerErrorResponse(
    SwaggerDecorators.SignIn.InternalServerErrorResponse
  )
  signIn(@Body() input: SignInInputDto): Promise<SignInDto> {
    return this.userService.signIn(input)
  }

  @Post('sign-up')
  @ApiOperation({ summary: 'Register new user' })
  @ApiCreatedResponse(SwaggerDecorators.SignUp.CreatedResponse)
  @ApiBadRequestResponse(SwaggerDecorators.SignUp.BadRequestResponse)
  @ApiConflictResponse(SwaggerDecorators.SignUp.ConflictResponse)
  @ApiInternalServerErrorResponse(
    SwaggerDecorators.SignUp.InternalServerErrorResponse
  )
  signUp(@Body() input: SignUpInputDto): Promise<SignUpDto> {
    return this.userService.signUp(input)
  }
}
