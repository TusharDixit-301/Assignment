import { BadRequestException, Injectable, Logger } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { AddContactsDto } from './contact.dto'
import { ContactRepository } from './contact.repository'
import uuid = require('uuid')

@Injectable()
export class ContactService {
  logger: Logger
  constructor(
    @InjectRepository(ContactRepository)
    private contactRepository: ContactRepository
  ) {
    this.logger = new Logger()
    this.listenSecondarySaleEvents()
  }

  async addContactDetails(addContactsDto: AddContactsDto) {
    try {
      const { name, phone, email } = addContactsDto
      const contacts = {
        id: uuid(),
        name,
        phone,
        email,
      }
      await this.contactRepository.insert(contacts)
      return { message: 'Contact details added successfully' }
    } catch (err) {
      this.logger.error('addContactDetails : ', JSON.stringify(err))
      throw new BadRequestException(err.message)
    }
  }

  async listenSecondarySaleEvents(): Promise<any> {
    try {
      // Moralis.initialize('YOUR_MORALIS_APPLICATION_ID')
      // Moralis.serverURL = 'YOUR_MORALIS_SERVER_URL'
      // const contract = new Moralis.Web3.eth.Contract(contactAbi, 'YOUR_CONTACT_ADDRESS')
      // contract.events.YourEventName({}, (error: Error, event: any) => {
      //   if (error) {
      //     console.error('Error:', error)
      //   } else {
      //     console.log('Event:', event.returnValues)
      //     // You can handle the event data here
      //   }
      // })
    } catch (error) {
      this.logger.error('went inside error ', error.message)
      throw new BadRequestException(error.message)
    }
  }
}
