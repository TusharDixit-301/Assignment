import { Module } from '@nestjs/common'
import { ContactRepository } from './contact.repository'
import { ContactController } from './contact.controller'
import { ContactService } from './contact.service'
import { Contacts } from './contact.entity'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [TypeOrmModule.forFeature([ContactRepository, Contacts])],
  providers: [ContactService],
  controllers: [ContactController],
  exports: [ContactService],
})
export class TaskModule {}
