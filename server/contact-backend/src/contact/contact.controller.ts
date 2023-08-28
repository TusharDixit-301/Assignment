import { Body, Controller, Logger, Post } from '@nestjs/common'
import { ContactService } from './contact.service'
import { AddContactsDto } from './contact.dto'

@Controller('contact')
export class ContactController {
  logger: Logger
  constructor(private contactService: ContactService) {
    this.logger = new Logger()
  }

  @Post('admin')
  async addContactDetails(@Body() addContactsDto: AddContactsDto) {
    return await this.contactService.addContactDetails(addContactsDto)
  }
}
