import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';
import { PublicUser } from './publicUser.entity';

@Entity({ schema: 'auto_dealer' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, length: 100 })
  @Index()
  fullName: string;

  @Column({ default: '', length: 14 })
  @Index()
  phoneNumber: string;

  @Column({ nullable: false })
  password: string;

  @Column({ nullable: false, length: 250, unique: true })
  @Index()
  email: string;

  toPublic(): PublicUser {
    return {
      id: this.id,
      fullName: this.fullName,
      phoneNumber: this.phoneNumber,
      email: this.email,
    };
  }
}
