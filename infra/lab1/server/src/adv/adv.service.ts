import { Injectable } from '@nestjs/common';
import { CreateAdvDto } from './dto/create-adv.dto';
import { UpdateAdvDto } from './dto/update-adv.dto';

@Injectable()
export class AdvService {
  create(createAdvDto: CreateAdvDto) {
    return 'This action adds a new adv';
  }

  findAll() {
    return `This action returns all adv`;
  }

  findOne(id: number) {
    return `This action returns a #${id} adv`;
  }

  update(id: number, updateAdvDto: UpdateAdvDto) {
    return `This action updates a #${id} adv`;
  }

  remove(id: number) {
    return `This action removes a #${id} adv`;
  }
}
