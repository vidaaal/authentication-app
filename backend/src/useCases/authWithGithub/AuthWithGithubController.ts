import { Request, Response } from 'express';
import { UserRepository } from '../../repositories/implementations/UsersRepository';

import { AuthWithGithubUseCase } from './AuthWithGithubUseCase';

class AuthWithGithubController {
  async handle(request: Request, response: Response) {
    const { code } = request.body;

    const authWithGithubUseCase = new AuthWithGithubUseCase(new UserRepository());

    const authResponse = await authWithGithubUseCase.execute(code);

    response.json(authResponse);
  }
}

export { AuthWithGithubController };
