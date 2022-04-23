import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { hashPassword } from '../helpers/hashPassword';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PublicUser } from './entities/publicUser.entity';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findOne(email: string): Promise<User> {
    const users = await this.usersRepository.find({
      email,
    });
    return users[0];
  }

  async findById(id: number): Promise<PublicUser> {
    return (await this.usersRepository.findOne(id)).toPublic();
  }

  async create(createUserDto: CreateUserDto): Promise<PublicUser> {
    const user = CreateUserDto.toUser(createUserDto);
    user.password = await hashPassword(user.password);
    return (await this.usersRepository.save(user)).toPublic();
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    // this.findOne();
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }
}
