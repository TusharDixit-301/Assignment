import { CreatedModified } from 'src/helpers'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { Task } from './contact.interface'

@Entity()
export class Contacts extends CreatedModified implements Task {
 
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  phone: number

  @Column()
  email: string
}
