import { ListItem } from 'list-item/entities/list-item.entity'
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  OneToMany,
} from 'typeorm'
import { User } from 'user/entities/user.entity'

@Entity('lists')
export class List {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @CreateDateColumn()
  createdAtUtc: string

  @UpdateDateColumn()
  updatedAtUtc: string

  @ManyToMany(() => User, (user) => user.lists, {
    onDelete: 'CASCADE',
  })
  users: User[]

  @OneToMany(() => ListItem, (item) => item.list, {
    onDelete: 'CASCADE',
  })
  items: ListItem[]
}
