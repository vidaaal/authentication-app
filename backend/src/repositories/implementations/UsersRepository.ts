import { Repository } from 'typeorm';
import { postgresDataSource } from '../../database/connect';
import { CreateUserDTO } from '../../dtos/CreateUserDTO';
import { User } from '../../entities/User';
import { IUsersRepository } from '../IUsersRepository';

class UserRepository implements IUsersRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = postgresDataSource.getRepository(User);
  }

  async create(data: CreateUserDTO): Promise<User> {
    const user = this.ormRepository.create(data);

    await this.ormRepository.save(user);

    return user;
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.ormRepository.findOne({
      where: { email },
    });

    return user;
  }
}

export { UserRepository };