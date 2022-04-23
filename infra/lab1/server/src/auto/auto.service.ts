import {
  Injectable,
  NotFoundException,
  ServiceUnavailableException,
} from '@nestjs/common';
import * as path from 'path';
import { CreateAutoDto } from './dto/create-auto.dto';
import { UpdateAutoDto } from './dto/update-auto.dto';
import * as sharp from 'sharp';
import { nanoid } from 'nanoid';
import * as fs from 'fs/promises';

@Injectable()
export class AutoService {
  private async savePhoto(photo: Express.Multer.File): Promise<string> {
    const fileNameParts = photo.originalname.split('.');
    const fileExt = fileNameParts[fileNameParts.length - 1];
    const fileName = path.join(__dirname, `../../media/${nanoid()}.${fileExt}`);
    const res = await sharp(photo.buffer)
      .resize({ width: 1200, height: 600, position: 'center' })
      .toFile(fileName);
    if (!res) {
      throw new ServiceUnavailableException();
    }
    return fileName;
  }

  private async readPhoto(fileName: string): Promise<Buffer> {
    const img = await fs.readFile(fileName);
    if (!img) {
      throw new NotFoundException();
    }
    return img;
  }

  create(createAutoDto: CreateAutoDto) {
    return 'This action adds a new auto';
  }

  findAll() {
    return `This action returns all auto`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auto`;
  }

  update(id: number, updateAutoDto: UpdateAutoDto) {
    return `This action updates a #${id} auto`;
  }

  remove(id: number) {
    return `This action removes a #${id} auto`;
  }
}
