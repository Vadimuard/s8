import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdvService } from './adv.service';
import { CreateAdvDto } from './dto/create-adv.dto';
import { UpdateAdvDto } from './dto/update-adv.dto';

@Controller('adv')
export class AdvController {
  constructor(private readonly advService: AdvService) {}

  @Post()
  create(@Body() createAdvDto: CreateAdvDto) {
    return this.advService.create(createAdvDto);
  }

  @Get()
  findAll() {
    return this.advService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.advService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdvDto: UpdateAdvDto) {
    return this.advService.update(+id, updateAdvDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.advService.remove(+id);
  }
}
