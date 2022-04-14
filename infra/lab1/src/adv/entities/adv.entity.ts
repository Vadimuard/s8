import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  OneToMany,
} from 'typeorm';
import { Auto } from '../../auto/entities/auto.entity';
import { Photo } from './photo.entity';

@Entity({ schema: 'auto_dealer' })
export class Advertisement {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '', length: 50 })
  VIN: string;

  @Column({ nullable: false })
  price: number;

  @Column('smallint', { default: 0 })
  horsePower: number;

  @OneToOne(() => Photo)
  mainPhoto: Photo;

  @OneToMany(() => Photo, (photo) => photo.adv)
  photos: Photo[];

  @OneToOne(() => Auto)
  auto: Auto;
}
