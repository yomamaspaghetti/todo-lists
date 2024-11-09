import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm'
import { Exclude } from 'class-transformer'
import { List } from 'list/entities/list.entity'
import { ListItem } from 'list-item/entities/list-item.entity'

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ unique: true })
  email: string

  @Column()
  @Exclude()
  password: string

  @CreateDateColumn()
  createdAtUtc: string

  @UpdateDateColumn()
  updatedAtUtc: string

  @ManyToMany(() => List, (list) => list.users, {
    onDelete: 'CASCADE',
  })
  @JoinTable({
    name: 'user_lists',
    joinColumn: { name: 'user_id' },
    inverseJoinColumn: { name: 'list_id' },
  })
  lists: List[]

  @OneToMany(() => ListItem, (item) => item.user, {
    onDelete: 'CASCADE',
  })
  listItems: ListItem[]
}
