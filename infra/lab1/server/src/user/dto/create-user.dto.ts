import { IsString, Length, IsPhoneNumber, IsEmail } from 'class-validator';
import { User } from '../entities/user.entity';

export class CreateUserDto {
  constructor(
    fullname: string,
    phoneNumber: string,
    email: string,
    password: string,
  ) {
    this.fullName = fullname;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.password = password;
  }

  @IsString()
  @Length(5, 100)
  fullName: string;

  @Length(10, 14)
  @IsPhoneNumber()
  phoneNumber: string;

  @IsEmail()
  email: string;

  @IsString()
  @Length(8, 40)
  password: string;

  static toUser(createUserDto: CreateUserDto): User {
    const user = new User();
    user.email = createUserDto.email;
    user.phoneNumber = createUserDto.phoneNumber;
    user.fullName = createUserDto.fullName;
    user.password = createUserDto.password;
    return user;
  }
}
