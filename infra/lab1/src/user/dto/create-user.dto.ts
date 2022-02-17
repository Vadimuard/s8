import {
  IsString,
  Length,
  IsPhoneNumber,
  IsEmail,
  IsBoolean,
  IsNumber,
  Min,
  Max,
  IsDate,
  ValidateIf,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @Length(4, 30)
  username: string;

  @IsString()
  @Length(5, 100)
  full_name: string;

  @Length(10, 14)
  @IsPhoneNumber('UA')
  phone_number: string;

  @IsEmail()
  email: string;

  @IsString()
  @Length(8, 40)
  password: string;

  @IsBoolean()
  isEmployee: boolean;

  @ValidateIf((o) => o.isEmployee)
  @IsDate()
  birthday?: Date;

  @ValidateIf((o) => o.isEmployee)
  @IsNumber()
  @Min(0)
  @Max(1)
  gender?: number;

  @ValidateIf((o) => o.isEmployee)
  @IsNumber()
  @Min(1000)
  wage?: number;

  @ValidateIf((o) => o.isEmployee)
  @IsString()
  @Length(5)
  position?: string;
}

export class CreateEmployeeDto {
  @IsNumber()
  @Min(1)
  userId: number;

  @IsDate()
  birthday: Date;

  @IsNumber()
  @Min(0)
  @Max(1)
  gender: number;

  @IsNumber()
  @Min(1000)
  wage: number;

  @IsString()
  @Length(5)
  position: string;
}
