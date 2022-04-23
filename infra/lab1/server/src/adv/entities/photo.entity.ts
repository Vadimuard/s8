import { Entity, Column, ManyToOne, PrimaryColumn } from 'typeorm';
import { Advertisement } from './adv.entity';

@Entity({ schema: 'auto_dealer' })
export class Photo {
  @PrimaryColumn()
  fileName: string;

  @Column('bytea', { nullable: false })
  buf: Buffer;

  @ManyToOne(() => Advertisement, (adv) => adv.photos)
  adv: Advertisement;
}
