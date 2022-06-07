import { Request, Response } from 'express';
import { UsersRepository } from '../../repositories/implementations/UsersRepository';

import { AuthWithGithubUseCase } from './AuthWithGithubUseCase';

class AuthWithGithubController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { code } = request.body;

    const authWithGithubUseCase = new AuthWithGithubUseCase(new UsersRepository());

    const authResponse = await authWithGithubUseCase.execute(code);

    return response.json(authResponse);
  }
}

export { AuthWithGithubController };
