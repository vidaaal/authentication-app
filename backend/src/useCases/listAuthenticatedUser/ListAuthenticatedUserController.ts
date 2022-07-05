import { Request, Response } from 'express';

import { UsersRepository } from '../../repositories/implementations/UsersRepository';
import { ListAuthenticatedUserUseCase } from './ListAuthenticatedUserUseCase';

class ListAuthenticatedUserController {
  async handle(request: Request, response: Response) {
    const listAuthenticatedUserController = new ListAuthenticatedUserUseCase(
      new UsersRepository(),
    );

    const user = await listAuthenticatedUserController.execute(request.userId);

    return response.json(user);
  }
}

export { ListAuthenticatedUserController };
