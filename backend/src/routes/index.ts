import { Request, Response, Router } from 'express';
import { AuthWithCredentialsController } from '../useCases/authWithCredentials/AuthWithCredentialsController';

import { AuthWithGithubController } from '../useCases/authWithGithub/AuthWithGithubController';
import { CreateUserController } from '../useCases/createUser/CreateUserController';

const router = Router();

const authWithGithubController = new AuthWithGithubController();
const createUserController = new CreateUserController();
const authWithCredentialsController = new AuthWithCredentialsController();

router.get('/github', (request: Request, response: Response) => {
  response.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`);
});

router.get('/auth/github/callback', (request: Request, response: Response) => {
  const { code } = request.query;

  response.json({ code });
});

router.post('/auth/github', authWithGithubController.handle);

router.post('/users/create', createUserController.handle);

router.post('/auth', authWithCredentialsController.handle);

export default router;
