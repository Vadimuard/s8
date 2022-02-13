import { User } from './user';

export class Employee extends User {
  birthday: Date;
  gender: number;
  wage: number;
  position: string;
}
