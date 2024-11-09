import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ListItemService } from './list-item.service'
import { ListItemController } from './list-item.controller'
import { ListItem } from './entities/list-item.entity'
import { UserModule } from 'user/user.module'
import { ListModule } from 'list/list.module'

@Module({
  imports: [TypeOrmModule.forFeature([ListItem]), UserModule, ListModule],
  controllers: [ListItemController],
  providers: [ListItemService],
  exports: [ListItemService],
})
export class ListItemModule {}
