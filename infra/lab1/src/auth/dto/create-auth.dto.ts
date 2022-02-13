import { IsEmail, IsPhoneNumber, IsString } from 'class-validator';

export class EmailLoginDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}

export class PhoneNumberLoginDto {
  @IsPhoneNumber()
  phone_number: string;

  @IsString()
  password: string;
}
