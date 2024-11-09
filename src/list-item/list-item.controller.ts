import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common'
import { ListItemService } from './list-item.service'
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger'
import { UpdateListItemInputDto } from './dto/update-list-item-input.dto'
import { CreateListItemInputDto } from './dto/create-list-item-input.dto'
import { UpdateListItemStatusInputDto } from './dto/update-list-item-status-input.dto'
import { IsUserGuard } from 'guards/is-user.guard'
import { Request } from 'express'
import { CreateListItemDto } from './dto/create-list-item.dto'
import { UpdateListItemDto } from './dto/update-list-item.dto'
import { GetListItemDto } from './dto/get-list-item.dto'
import { UpdateListItemStatusDto } from './dto/update-list-item-status.dto'
import { IsListItemListOwnerGuard } from 'guards/is-list-item-list-owner.guard'
import { SwaggerDecorators } from './constants/swagger-decorators'

@ApiTags('List Item')
@Controller('list-item')
export class ListItemController {
  constructor(private readonly listItemService: ListItemService) {}

  @Post('create/:listId')
  @UseGuards(IsUserGuard, IsListItemListOwnerGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a new list item' })
  @ApiCreatedResponse(SwaggerDecorators.Create.CreatedResponse)
  @ApiBadRequestResponse(SwaggerDecorators.Create.BadRequestResponse)
  @ApiUnauthorizedResponse(SwaggerDecorators.Create.UnauthorizedResponse)
  @ApiForbiddenResponse(SwaggerDecorators.Create.ForbiddenResponse)
  @ApiNotFoundResponse(SwaggerDecorators.Create.NotFoundResponse)
  @ApiInternalServerErrorResponse(
    SwaggerDecorators.Create.InternalServerErrorResponse
  )
  create(
    @Param('listId', ParseIntPipe) listId: number,
    @Body() input: CreateListItemInputDto,
    @Req() req: Request
  ): Promise<CreateListItemDto> {
    return this.listItemService.create(listId, input, req)
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a list item by id' })
  @ApiOkResponse(SwaggerDecorators.FindById.OkResponse)
  @ApiNotFoundResponse(SwaggerDecorators.FindById.NotFoundResponse)
  @ApiInternalServerErrorResponse(
    SwaggerDecorators.FindById.InternalServerErrorResponse
  )
  findById(@Param('id', ParseIntPipe) id: number): Promise<GetListItemDto> {
    return this.listItemService.findById(id)
  }

  @Patch(':id')
  @UseGuards(IsUserGuard, IsListItemListOwnerGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update a list item' })
  @ApiOkResponse(SwaggerDecorators.Update.OkResponse)
  @ApiBadRequestResponse(SwaggerDecorators.Update.BadRequestResponse)
  @ApiUnauthorizedResponse(SwaggerDecorators.Update.UnauthorizedResponse)
  @ApiForbiddenResponse(SwaggerDecorators.Update.ForbiddenResponse)
  @ApiNotFoundResponse(SwaggerDecorators.Update.NotFoundResponse)
  @ApiInternalServerErrorResponse(
    SwaggerDecorators.Update.InternalServerErrorResponse
  )
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() input: UpdateListItemInputDto
  ): Promise<UpdateListItemDto> {
    return this.listItemService.update(id, input)
  }

  @Delete(':id')
  @UseGuards(IsUserGuard, IsListItemListOwnerGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete a list item' })
  @ApiOkResponse(SwaggerDecorators.Remove.OkResponse)
  @ApiBadRequestResponse(SwaggerDecorators.Remove.BadRequestResponse)
  @ApiUnauthorizedResponse(SwaggerDecorators.Remove.UnauthorizedResponse)
  @ApiForbiddenResponse(SwaggerDecorators.Remove.ForbiddenResponse)
  @ApiNotFoundResponse(SwaggerDecorators.Remove.NotFoundResponse)
  @ApiInternalServerErrorResponse(
    SwaggerDecorators.Remove.InternalServerErrorResponse
  )
  remove(@Param('id', ParseIntPipe) id: number): Promise<boolean> {
    return this.listItemService.remove(id)
  }

  @Patch(':id/status')
  @UseGuards(IsUserGuard, IsListItemListOwnerGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update a list item status' })
  @ApiOkResponse(SwaggerDecorators.UpdateStatus.OkResponse)
  @ApiBadRequestResponse(SwaggerDecorators.UpdateStatus.BadRequestResponse)
  @ApiUnauthorizedResponse(SwaggerDecorators.UpdateStatus.UnauthorizedResponse)
  @ApiForbiddenResponse(SwaggerDecorators.UpdateStatus.ForbiddenResponse)
  @ApiNotFoundResponse(SwaggerDecorators.UpdateStatus.NotFoundResponse)
  @ApiInternalServerErrorResponse(
    SwaggerDecorators.UpdateStatus.InternalServerErrorResponse
  )
  updateStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body() input: UpdateListItemStatusInputDto
  ): Promise<UpdateListItemStatusDto> {
    return this.listItemService.updateStatus(id, input)
  }
}
