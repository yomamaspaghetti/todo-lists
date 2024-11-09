import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ListService } from './list.service'
import { ListController } from './list.controller'
import { List } from './entities/list.entity'
import { UserModule } from 'user/user.module'

@Module({
  imports: [TypeOrmModule.forFeature([List]), UserModule],
  controllers: [ListController],
  providers: [ListService],
  exports: [ListService],
})
export class ListModule {}
