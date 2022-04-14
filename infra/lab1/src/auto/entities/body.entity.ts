import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ schema: 'auto_dealer' })
export class Body {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, length: 100 })
  name: string;
}
