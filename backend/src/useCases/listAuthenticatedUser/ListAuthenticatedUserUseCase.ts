import { IUsersRepository } from '../../repositories/IUsersRepository';

class ListAuthenticatedUserUseCase {
  private usersRepository: IUsersRepository;

  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute(userId: string) {
    const user = await this.usersRepository.findById(userId);

    return user;
  }
}

export { ListAuthenticatedUserUseCase };
