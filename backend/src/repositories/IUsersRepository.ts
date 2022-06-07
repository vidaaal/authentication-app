import { CreateUserDTO } from '../dtos/CreateUserDTO';
import { User } from '../entities/User';

export interface IUsersRepository {
  findByEmail(email: string): Promise<User | null>;
  create(data: CreateUserDTO): Promise<User>;
}
