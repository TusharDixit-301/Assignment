import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Contacts } from './task/contact.entity'
import { TaskModule } from './task/contact.module'

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: `${process.env.HOST}`,
      port: Number(process.env.POSTGRESS_PORT),
      username: `${process.env.POSTGRES_USERNAME}`,
      password: `${process.env.POSTGRES_PASSWORD}`,
      database: `${process.env.DATABASE}`,
      entities: [Contacts],
      autoLoadEntities: true,
      synchronize: true,
    }),
    TaskModule,
  ],
})
export class AppModule {}
