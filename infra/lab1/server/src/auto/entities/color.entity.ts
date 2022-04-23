import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ schema: 'auto_dealer' })
export class Color {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, length: 50 })
  name: string;
}
