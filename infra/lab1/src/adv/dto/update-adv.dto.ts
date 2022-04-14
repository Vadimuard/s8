import { PartialType } from '@nestjs/mapped-types';
import { CreateAdvDto } from './create-adv.dto';

export class UpdateAdvDto extends PartialType(CreateAdvDto) {}
