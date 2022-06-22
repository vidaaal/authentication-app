import { Request, Response } from 'express';
import { UsersRepository } from '../../repositories/implementations/UsersRepository';
import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const createUserUseCase = new CreateUserUseCase(new UsersRepository());

    const createUserResponse = await createUserUseCase.execute({ email, password });

    return response.sendStatus(201);
  }
}

export { CreateUserController };
