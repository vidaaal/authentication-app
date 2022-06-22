import { Request, Response, Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { AuthWithCredentialsController } from '../useCases/authWithCredentials/AuthWithCredentialsController';

import { AuthWithGithubController } from '../useCases/authWithGithub/AuthWithGithubController';
import { CreateUserController } from '../useCases/createUser/CreateUserController';

const router = Router();

const authWithGithubController = new AuthWithGithubController();
const createUserController = new CreateUserController();
const authWithCredentialsController = new AuthWithCredentialsController();

router.get('/facebook', (request: Request, response: Response) => {
  response.redirect(`https://www.facebook.com/v14.0/dialog/oauth?
  client_id=${process.env.FACEBOOK_CLIENT_ID}
  &redirect_uri=${process.env.FACEBOOK_REDIRECT_URI}
  &state={"{st=state123abc,ds=123456789}`);
});

router.get('/auth/github/callback', (request: Request, response: Response) => {
  const { code } = request.query;

  response.json({ code });
});

router.post('/auth/github', authWithGithubController.handle);
router.post('/users/create', createUserController.handle);
router.post('/auth', authWithCredentialsController.handle);

// router.use(ensureAuthenticated);

export default router;
