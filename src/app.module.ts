import { Module } from '@nestjs/common'
import DatabaseConfig from 'config/typeorm'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { UserModule } from 'user/user.module'
import { ListModule } from 'list/list.module'
import { ListItemModule } from 'list-item/list-item.module'
import { JwtConfigModule } from 'config/jwt.module'

@Module({
  imports: [
    ConfigModule.forRoot({ load: [DatabaseConfig], isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        configService.get('database'),
    }),
    JwtConfigModule,
    UserModule,
    ListModule,
    ListItemModule,
  ],
})
export class AppModule {}
