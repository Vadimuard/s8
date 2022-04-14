import { Injectable, ServiceUnavailableException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ResourceExistsException } from '../helpers/CustomExceptions';
import { hashPassword } from '../helpers/hashPassword';
import { PostgresService } from '../postgres/postgres.service';
import { CreateEmployeeDto, CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrivateUser, PublicUser } from './entity/user';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    private pg: PostgresService,
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(newUser: CreateUserDto): Promise<number> {
    const qs = `INSERT INTO auto_dealer.users
      (username, full_name, phone_number, email, password, employee_id)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING id;
    `;
    try {
      const { email, phone_number, username } = newUser;
      if (await this.getByEmail(email))
        throw new ResourceExistsException('User with this email');

      if (await this.getByPhoneNumber(phone_number))
        throw new ResourceExistsException('User with this phone number');

      if (await this.getByUsername(username))
        throw new ResourceExistsException('User with this username');
    } catch (err) {
      console.error(err);
      throw new ServiceUnavailableException(
        'Service unavailable while creating a user. Please try again.',
      );
    }
    try {
      const { username, full_name, phone_number, email, password, isEmployee } =
        newUser;
      const passwordHash = await hashPassword(password);
      const [user] = await this.pg.executeQuery(qs, [
        username,
        full_name,
        phone_number,
        email,
        passwordHash,
        0,
      ]);
      if (isEmployee) {
        const { birthday, gender, wage, position } = newUser;
        const newEmployee = {
          birthday,
          gender,
          wage,
          position,
        } as CreateEmployeeDto;
        newEmployee.userId = user.id;
        await this.createEmployee(newEmployee);
      }
      return user.id;
    } catch (err) {
      console.error(err);
      throw new ServiceUnavailableException(
        'Service unavailable while creating a user. Please try again.',
      );
    }
  }

  async createEmployee(newEmployee: CreateEmployeeDto): Promise<number> {
    const qs = `INSERT INTO auto_dealer.employees
      (birthday, wage, position, gender)
      VALUES ($1, $2, $3, $4)
      RETURNING id;
    `;
    try {
      const { userId, birthday, wage, position, gender } = newEmployee;
      const [employee] = await this.pg.executeQuery(qs, [
        birthday,
        wage,
        position,
        gender,
      ]);
      await this.pg.executeQuery(
        `UPDATE auto_dealer.users SET
        employee_id = $1 WHERE id = $2`,
        [employee.id, userId],
      );
      return employee.id;
    } catch (err) {
      console.error(err);
      throw new ServiceUnavailableException(
        'Service unavailable while creating employee. Manual action needed.',
      );
    }
  }

  async getByEmail(email: string): Promise<PrivateUser> {
    const qs = `SELECT * FROM auto_dealer.users WHERE email = $1;`;
    const [user] = await this.pg.executeQuery(qs, [email]);
    return user;
  }

  async getByPhoneNumber(phoneNumber: string): Promise<PrivateUser> {
    const qs = `SELECT * FROM auto_dealer.users WHERE phone_number = $1;`;
    const [user] = await this.pg.executeQuery(qs, [phoneNumber]);
    return user;
  }

  async getByUsername(username: string): Promise<PublicUser> {
    const qs = `SELECT * FROM auto_dealer.users WHERE username = $1`;
    const [user] = await this.pg.executeQuery(qs, [username]);
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }
}
