import { Module } from '@nestjs/common';
import { AdvService } from './adv.service';
import { AdvController } from './adv.controller';

@Module({
  controllers: [AdvController],
  providers: [AdvService]
})
export class AdvModule {}
