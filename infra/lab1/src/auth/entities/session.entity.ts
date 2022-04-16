import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Index,
  OneToOne,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';

@Entity({ schema: 'auto_dealer' })
export class Session {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Index()
  token: string;

  @Column('date', { default: () => 'CURRENT_DATE' })
  @Index()
  createdAt: Date;

  @OneToOne(() => User)
  user: User;

  @Column()
  @Index()
  userId: number;
}
