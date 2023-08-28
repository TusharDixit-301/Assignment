import { EntityRepository, Repository } from 'typeorm'
import { Contacts } from './contact.entity'

@EntityRepository(Contacts)
export class ContactRepository extends Repository<Contacts> {}
