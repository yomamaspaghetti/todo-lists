import { ApiResponseNoStatusOptions } from '@nestjs/swagger'
import { CreateListItemDto } from 'list-item/dto/create-list-item.dto'
import { GetListItemDto } from 'list-item/dto/get-list-item.dto'
import { UpdateListItemStatusDto } from 'list-item/dto/update-list-item-status.dto'
import { UpdateListItemDto } from 'list-item/dto/update-list-item.dto'

export const SwaggerDecorators = {
  Create: {
    CreatedResponse: {
      description: 'Returns the created list item',
      type: CreateListItemDto,
    },
    BadRequestResponse: {
      description: 'Bad request',
      examples: {
        arrayError: {
          summary: 'Input validation error',
          value: {
            message: ['name must be a string'],
            error: 'Bad Request',
            statusCode: 400,
          },
        },
        stringError: {
          summary: 'Other handled error',
          value: {
            message: 'Due date cannot be in the past',
            error: 'Bad Request',
            statusCode: 400,
          },
        },
      },
      schema: {
        type: 'object',
        properties: {
          message: {
            oneOf: [
              {
                type: 'array',
                items: { type: 'string' },
                example: ['name must be a string'],
              },
              {
                type: 'string',
                example: 'Due date cannot be in the past',
              },
            ],
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
  FindById: {
    OkResponse: {
      description: 'Returns the list item',
      type: GetListItemDto,
    },
    NotFoundResponse: {
      description: 'Not found',
      schema: {
        type: 'object',
        properties: {
          message: { type: 'string', example: 'List item with ID 1 not found' },
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
      description: 'Returns the updated list item',
      type: UpdateListItemDto,
    },
    BadRequestResponse: {
      description: 'Bad request',
      examples: {
        arrayError: {
          summary: 'Input validation error',
          value: {
            message: ['name must be a string'],
            error: 'Bad Request',
            statusCode: 400,
          },
        },
        stringError: {
          summary: 'Other handled error',
          value: {
            message: 'Due date cannot be in the past',
            error: 'Bad Request',
            statusCode: 400,
          },
        },
      },
      schema: {
        type: 'object',
        properties: {
          message: {
            oneOf: [
              {
                type: 'array',
                items: { type: 'string' },
                example: ['name must be a string'],
              },
              {
                type: 'string',
                example: 'Due date cannot be in the past',
              },
            ],
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
          message: { type: 'string', example: 'List item with ID 1 not found' },
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
    BadRequestResponse: {
      description: 'Bad request',
      schema: {
        type: 'object',
        properties: {
          message: {
            type: 'string',
            example: 'Incorrect type for id parameter',
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
          message: { type: 'string', example: 'List item with ID 1 not found' },
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
  UpdateStatus: {
    OkResponse: {
      description: 'Returns the updated list item status',
      type: UpdateListItemStatusDto,
    },
    BadRequestResponse: {
      description: 'Bad request',
      schema: {
        type: 'object',
        properties: {
          message: {
            type: 'string',
            example: 'Incorrect type for id parameter',
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
          message: { type: 'string', example: 'List item with ID 1 not found' },
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
