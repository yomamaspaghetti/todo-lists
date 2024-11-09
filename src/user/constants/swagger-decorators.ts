import { ApiResponseNoStatusOptions } from '@nestjs/swagger'
import { CreateListItemDto } from 'list-item/dto/create-list-item.dto'
import { GetListItemDto } from 'list-item/dto/get-list-item.dto'
import { UpdateListItemStatusDto } from 'list-item/dto/update-list-item-status.dto'
import { UpdateListItemDto } from 'list-item/dto/update-list-item.dto'
import { SignInDto } from 'user/dto/sign-in.dto'
import { SignUpDto } from 'user/dto/sign-up.dto'
import { UserMeDto } from 'user/dto/user-profile.dto'

export const SwaggerDecorators = {
  UserMe: {
    OkResponse: {
      description: 'Returns user profile',
      type: UserMeDto,
    },
    UnauthorizedResponse: {
      description: 'Unauthorized',
      schema: {
        type: 'object',
        properties: {
          message: { type: 'string', example: 'Missing token' },
          error: { type: 'string', example: 'Unauthorized' },
          statusCode: { type: 'number', example: 401 },
        },
      },
    },
    InternalServerErrorResponse: {
      description: 'Internal server error',
      schema: {
        type: 'object',
        properties: {
          message: { type: 'string', example: 'Internal server error' },
          statusCode: { type: 'number', example: 500 },
        },
      },
    },
  },
  SignIn: {
    CreatedResponse: {
      description: 'Returns access token',
      type: SignInDto,
    },
    BadRequestResponse: {
      description: 'Bad request',
      schema: {
        type: 'object',
        properties: {
          message: {
            type: 'array',
            items: { type: 'string' },
            example: ['email must be an email'],
          },
          error: { type: 'string', example: 'Bad Request' },
          statusCode: { type: 'number', example: 400 },
        },
      },
    },
    ForbiddenResponse: {
      description: 'Forbidden',
      schema: {
        type: 'object',
        properties: {
          message: { type: 'string', example: 'Invalid credentials' },
          error: { type: 'string', example: 'Forbidden' },
          statusCode: { type: 'number', example: 403 },
        },
      },
    },
    InternalServerErrorResponse: {
      description: 'Internal server error',
      schema: {
        type: 'object',
        properties: {
          message: { type: 'string', example: 'Internal server error' },
          statusCode: { type: 'number', example: 500 },
        },
      },
    },
  },
  SignUp: {
    CreatedResponse: {
      description: 'Returns user profile',
      type: SignUpDto,
    },
    BadRequestResponse: {
      description: 'Bad request',
      schema: {
        type: 'object',
        properties: {
          message: {
            type: 'array',
            items: { type: 'string' },
            example: [
              'email must be an email',
              'password is not strong enough',
            ],
          },
          error: { type: 'string', example: 'Bad Request' },
          statusCode: { type: 'number', example: 400 },
        },
      },
    },
    ConflictResponse: {
      description: 'Conflict',
      schema: {
        type: 'object',
        properties: {
          message: { type: 'string', example: 'User already exists' },
          error: { type: 'string', example: 'Conflict' },
          statusCode: { type: 'number', example: 409 },
        },
      },
    },
    InternalServerErrorResponse: {
      description: 'Internal server error',
      schema: {
        type: 'object',
        properties: {
          message: { type: 'string', example: 'Internal server error' },
          statusCode: { type: 'number', example: 500 },
        },
      },
    },
  },
} satisfies Record<string, Record<string, ApiResponseNoStatusOptions>>
