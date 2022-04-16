import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  OneToMany,
} from 'typeorm';
import { Auto } from '../../auto/entities/auto.entity';
import { Employee } from '../../employee/entities/employee.entity';
import { Photo } from './photo.entity';

@Entity({ schema: 'auto_dealer' })
export class Advertisement {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column({ nullable: false })
  price: number;

  @Column('date', { default: () => 'CURRENT_DATE' })
  createdAt: Date;

  @OneToOne(() => Employee)
  seller: Employee;

  @OneToMany(() => Photo, (photo) => photo.adv)
  photos: Photo[];

  @OneToOne(() => Auto)
  auto: Auto;
}
