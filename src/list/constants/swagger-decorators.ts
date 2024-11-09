import { ApiResponseNoStatusOptions } from '@nestjs/swagger'
import { CreateListDto } from 'list/dto/create-list.dto'
import { GetListWithItemsDto } from 'list/dto/get-list-with-items.dto'
import { GetListDto } from 'list/dto/get-list.dto'
import { UpdateListDto } from 'list/dto/update-list.dto'

export const SwaggerDecorators = {
  Create: {
    CreatedResponse: {
      description: 'Returns the created list',
      type: CreateListDto,
    },
    BadRequestResponse: {
      description: 'Bad request',
      schema: {
        type: 'object',
        properties: {
          message: {
            type: 'array',
            items: { type: 'string' },
            example: ['name must be a string'],
          },
          error: { type: 'string', example: 'Bad Request' },
          statusCode: { type: 'number', example: 400 },
        },
      },
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
  FindById: {
    OkResponse: {
      description: 'Returns the list',
      type: GetListDto,
    },
    NotFoundResponse: {
      description: 'Not found',
      schema: {
        type: 'object',
        properties: {
          message: { type: 'string', example: 'List with ID 1 not found' },
          error: { type: 'string', example: 'Not Found' },
          statusCode: { type: 'number', example: 404 },
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
  Update: {
    OkResponse: {
      description: 'Returns the updated list',
      type: UpdateListDto,
    },
    BadRequestResponse: {
      description: 'Bad request',
      schema: {
        type: 'object',
        properties: {
          message: {
            type: 'array',
            items: { type: 'string' },
            example: ['name must be a string'],
          },
          error: { type: 'string', example: 'Bad Request' },
          statusCode: { type: 'number', example: 400 },
        },
      },
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
    ForbiddenResponse: {
      description: 'Forbidden',
      schema: {
        type: 'object',
        properties: {
          message: {
            type: 'string',
            example: 'Only list owner can perform this action',
          },
          error: { type: 'string', example: 'Forbidden' },
          statusCode: { type: 'number', example: 403 },
        },
      },
    },
    NotFoundResponse: {
      description: 'Not found',
      schema: {
        type: 'object',
        properties: {
          message: { type: 'string', example: 'List with ID 1 not found' },
          error: { type: 'string', example: 'Not Found' },
          statusCode: { type: 'number', example: 404 },
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
  Remove: {
    OkResponse: {
      description: 'Returns true if the list was deleted',
      type: Boolean,
      example: true,
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
    ForbiddenResponse: {
      description: 'Forbidden',
      schema: {
        type: 'object',
        properties: {
          message: {
            type: 'string',
            example: 'Only list owner can perform this action',
          },
          error: { type: 'string', example: 'Forbidden' },
          statusCode: { type: 'number', example: 403 },
        },
      },
    },
    NotFoundResponse: {
      description: 'Not found',
      schema: {
        type: 'object',
        properties: {
          message: { type: 'string', example: 'List with ID 1 not found' },
          error: { type: 'string', example: 'Not Found' },
          statusCode: { type: 'number', example: 404 },
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
  ShareList: {
    CreatedResponse: {
      description: 'Returns true if the list was shared',
      type: Boolean,
      example: true,
    },
    BadRequestResponse: {
      description: 'Bad request',
      schema: {
        type: 'object',
        properties: {
          message: {
            type: 'array',
            items: { type: 'string' },
            example: ['userId must be an integer number'],
          },
          error: { type: 'string', example: 'Bad Request' },
          statusCode: { type: 'number', example: 400 },
        },
      },
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
    ForbiddenResponse: {
      description: 'Forbidden',
      schema: {
        type: 'object',
        properties: {
          message: {
            type: 'string',
            example: 'Only list owner can perform this action',
          },
          error: { type: 'string', example: 'Forbidden' },
          statusCode: { type: 'number', example: 403 },
        },
      },
    },
    NotFoundResponse: {
      description: 'Not found',
      schema: {
        type: 'object',
        properties: {
          message: { type: 'string', example: 'List with ID 1 not found' },
          error: { type: 'string', example: 'Not Found' },
          statusCode: { type: 'number', example: 404 },
        },
      },
    },
    ConflictResponse: {
      description: 'Conflict',
      schema: {
        type: 'object',
        properties: {
          message: {
            type: 'string',
            example: 'List is already shared with user 1',
          },
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
  FindItems: {
    OkResponse: {
      description: 'Returns the list with items',
      type: GetListWithItemsDto,
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
    NotFoundResponse: {
      description: 'Not found',
      schema: {
        type: 'object',
        properties: {
          message: { type: 'string', example: 'List with ID 1 not found' },
          error: { type: 'string', example: 'Not Found' },
          statusCode: { type: 'number', example: 404 },
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
