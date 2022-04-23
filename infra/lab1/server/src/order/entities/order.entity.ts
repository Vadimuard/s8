import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { Auto } from '../../auto/entities/auto.entity';
import { Employee } from '../../employee/entities/employee.entity';
import { User } from '../../user/entities/user.entity';

@Entity({ schema: 'auto_dealer' })
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 0 })
  discount: number;

  @Column('date', { default: () => 'CURRENT_DATE' })
  createdAt: Date;

  @Column('date')
  paidDate: Date;

  @OneToOne(() => Auto)
  auto: Auto;

  @OneToOne(() => User)
  seller: Employee;

  @OneToOne(() => User)
  buyer: User;
}
