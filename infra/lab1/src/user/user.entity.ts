import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ schema: 'auto_dealer' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, length: 30 })
  userName: string;

  @Column({ nullable: false, length: 100 })
  fullName: string;

  @Column({ default: '', length: 14 })
  phoneNumber: string;

  @Column({ nullable: false })
  password: string;

  @Column({ nullable: false, length: 250 })
  email: string;

  @Column({ default: 0 })
  emloyeeId: number;
}
