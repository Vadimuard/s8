import { PublicUser } from './user';

export class Employee extends PublicUser {
  birthday: Date;
  gender: number;
  wage: number;
  position: string;
}
