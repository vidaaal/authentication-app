import { Request, Response } from 'express';

import { AuthWithCredentials } from './AuthWithCredentialsUseCase';
import { UsersRepository } from '../../repositories/implementations/UsersRepository';

class AuthWithCredentialsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const authWithCredentialsUseCase = new AuthWithCredentials(new UsersRepository());

    const authResponse = await authWithCredentialsUseCase.execute({ email, password });

    return response.json(authResponse);
  }
}

export { AuthWithCredentialsController };
