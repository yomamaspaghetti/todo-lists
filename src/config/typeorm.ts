import { ConfigService, registerAs } from '@nestjs/config'
import type { TypeOrmModuleOptions } from '@nestjs/typeorm'
import * as dotenv from 'dotenv'
import { DataSource } from 'typeorm'
import { SnakeNamingStrategy } from 'typeorm-naming-strategies'

dotenv.config()

const IS_PRODUCTION = process.env.NODE_ENV === 'production'

const config = {
  type: 'postgres',
  url: new ConfigService().get<string>('DATABASE_URL'),
  useUTC: true,
  synchronize: false,
  logging: !IS_PRODUCTION,
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/migrations/*{.ts,.js}'],
  migrationsTransactionMode: 'each',
  namingStrategy: new SnakeNamingStrategy(),
} satisfies TypeOrmModuleOptions

export const dataSource = new DataSource(config)
export default registerAs('database', () => config)
