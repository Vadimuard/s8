export class PublicUser {
  user_id: number;
  username: string;
  employee_id: number;
  full_name: string;
  email: string;
}

export class PrivateUser {
  user_id: number;
  employee_id: number;
  username: string;
  full_name: string;
  email: string;
  phone_number: string;
  password: string;
}
