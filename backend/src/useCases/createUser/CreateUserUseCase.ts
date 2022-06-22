import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../../entities/User';

import { AppError } from '../../errors/AppError';
import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  token: string;
  user: User;
}

class CreateUserUseCase {
  private usersRepository: IUsersRepository;

  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute({ email, password }: IRequest): Promise<void> {
    const { JWT_SECRET } = process.env;

    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new AppError('User already exists');
    }

    const passwordHash = await bcrypt.hash(password, 8);

    const user = await this.usersRepository.create({
      email,
      password: passwordHash,
    });

    delete user.password;
  }
}

export { CreateUserUseCase };
