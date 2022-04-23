import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Position } from './position.entity';

@Entity({ schema: 'auto_dealer' })
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  gender: number;

  @Column({ nullable: false })
  wage: number;

  @OneToOne(() => Position)
  position: Position;

  @OneToOne(() => User)
  user: User;
}
