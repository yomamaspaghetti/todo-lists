import { LIST_ITEM_STATUS } from 'common/enums'
import { List } from 'list/entities/list.entity'
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm'
import { User } from 'user/entities/user.entity'

@Entity('list_items')
export class ListItem {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column({ nullable: true })
  description: string | null

  @Column({ type: 'timestamp', nullable: true })
  dueAtUtc: string | null

  @Column()
  userId: number

  @Column()
  listId: number

  @Column({ type: 'enum', enum: LIST_ITEM_STATUS })
  status: (typeof LIST_ITEM_STATUS)[keyof typeof LIST_ITEM_STATUS]

  @CreateDateColumn()
  createdAtUtc: string

  @UpdateDateColumn()
  updatedAtUtc: string

  @ManyToOne(() => List, (list) => list.items, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'list_id' })
  list: List

  @ManyToOne(() => User, (user) => user.listItems, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' })
  user: User
}
