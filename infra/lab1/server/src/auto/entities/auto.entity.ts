import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { Body } from './body.entity';
import { Color } from './color.entity';
import { Make } from './make.entity';
import { Model } from './model.entity';

@Entity({ schema: 'auto_dealer' })
export class Auto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('smallint', { nullable: false })
  releaseYear: number;

  @Column({ default: '', length: 50 })
  VIN: string;

  @Column('smallint', { default: 0 })
  horsePower: number;

  @OneToOne(() => Make)
  make: Make;

  @OneToOne(() => Model)
  model: Model;

  @OneToOne(() => Body)
  bodyId: Body;

  @OneToOne(() => Color)
  colorId: Color;
}
