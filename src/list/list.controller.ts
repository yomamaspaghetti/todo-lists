import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Body,
  Param,
  ParseIntPipe,
  UseGuards,
  Req,
} from '@nestjs/common'
import { ListService } from './list.service'
import {
  ApiTags,
  ApiOperation,
  ApiBearerAuth,
  ApiOkResponse,
  ApiUnauthorizedResponse,
  ApiInternalServerErrorResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiBadRequestResponse,
  ApiConflictResponse,
  ApiForbiddenResponse,
} from '@nestjs/swagger'
import { CreateListInputDto } from './dto/create-list-input.dto'
import { UpdateListInputDto } from './dto/update-list-input.dto'
import { ShareListInputDto } from './dto/share-list-input.dto'
import { IsUserGuard } from 'guards/is-user.guard'
import { IsListOwnerGuard } from 'guards/is-list-owner.guard'
import { Request } from 'express'
import { CreateListDto } from './dto/create-list.dto'
import { UpdateListDto } from './dto/update-list.dto'
import { GetListDto } from './dto/get-list.dto'
import { GetListWithItemsDto } from './dto/get-list-with-items.dto'
import { SwaggerDecorators } from './constants/swagger-decorators'

@ApiTags('List')
@Controller('list')
export class ListController {
  constructor(private readonly listService: ListService) {}

  @Post('create')
  @UseGuards(IsUserGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a new list' })
  @ApiCreatedResponse(SwaggerDecorators.Create.CreatedResponse)
  @ApiBadRequestResponse(SwaggerDecorators.Create.BadRequestResponse)
  @ApiUnauthorizedResponse(SwaggerDecorators.Create.UnauthorizedResponse)
  @ApiInternalServerErrorResponse(
    SwaggerDecorators.Create.InternalServerErrorResponse
  )
  create(
    @Body() input: CreateListInputDto,
    @Req() req: Request
  ): Promise<CreateListDto> {
    return this.listService.create(input, req)
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a list by id' })
  @ApiOkResponse(SwaggerDecorators.FindById.OkResponse)
  @ApiNotFoundResponse(SwaggerDecorators.FindById.NotFoundResponse)
  @ApiInternalServerErrorResponse(
    SwaggerDecorators.FindById.InternalServerErrorResponse
  )
  findById(@Param('id', ParseIntPipe) id: number): Promise<GetListDto> {
    return this.listService.findById(id)
  }

  @Patch(':id')
  @UseGuards(IsUserGuard, IsListOwnerGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update a list' })
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
    @Body() input: UpdateListInputDto
  ): Promise<UpdateListDto> {
    return this.listService.update(id, input)
  }

  @Delete(':id')
  @UseGuards(IsUserGuard, IsListOwnerGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete a list' })
  @ApiOkResponse(SwaggerDecorators.Remove.OkResponse)
  @ApiUnauthorizedResponse(SwaggerDecorators.Remove.UnauthorizedResponse)
  @ApiForbiddenResponse(SwaggerDecorators.Remove.ForbiddenResponse)
  @ApiNotFoundResponse(SwaggerDecorators.Remove.NotFoundResponse)
  @ApiInternalServerErrorResponse(
    SwaggerDecorators.Remove.InternalServerErrorResponse
  )
  remove(@Param('id', ParseIntPipe) id: number): Promise<boolean> {
    return this.listService.remove(id)
  }

  @Post(':id/share')
  @UseGuards(IsUserGuard, IsListOwnerGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Share a list with another user' })
  @ApiCreatedResponse(SwaggerDecorators.ShareList.CreatedResponse)
  @ApiBadRequestResponse(SwaggerDecorators.ShareList.BadRequestResponse)
  @ApiUnauthorizedResponse(SwaggerDecorators.ShareList.UnauthorizedResponse)
  @ApiForbiddenResponse(SwaggerDecorators.ShareList.ForbiddenResponse)
  @ApiNotFoundResponse(SwaggerDecorators.ShareList.NotFoundResponse)
  @ApiConflictResponse(SwaggerDecorators.ShareList.ConflictResponse)
  @ApiInternalServerErrorResponse(
    SwaggerDecorators.ShareList.InternalServerErrorResponse
  )
  shareList(
    @Param('id', ParseIntPipe) id: number,
    @Body() input: ShareListInputDto
  ): Promise<boolean> {
    return this.listService.shareList(id, input)
  }

  @Get(':id/items')
  @ApiOperation({ summary: 'Get list with items' })
  @ApiOkResponse(SwaggerDecorators.FindItems.OkResponse)
  @ApiUnauthorizedResponse(SwaggerDecorators.FindItems.UnauthorizedResponse)
  @ApiNotFoundResponse(SwaggerDecorators.FindItems.NotFoundResponse)
  @ApiInternalServerErrorResponse(
    SwaggerDecorators.FindItems.InternalServerErrorResponse
  )
  findItems(
    @Param('id', ParseIntPipe) id: number
  ): Promise<GetListWithItemsDto> {
    return this.listService.findByIdWithItems(id)
  }
}
