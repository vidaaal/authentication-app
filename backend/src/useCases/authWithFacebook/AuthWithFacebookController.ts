import { Request, Response } from 'express';
import { UsersRepository } from '../../repositories/implementations/UsersRepository';

import { AuthWithFacebookUseCase } from './AuthWithFacebookUseCase';

class AuthWithFacebookController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { code } = request.body;

    const authWithGithubUseCase = new AuthWithFacebookUseCase(new UsersRepository());

    const authResponse = await authWithGithubUseCase.execute(code);

    return response.json(authResponse);
  }
}

export { AuthWithFacebookController };
