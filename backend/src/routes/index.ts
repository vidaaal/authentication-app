import { Request, Response, Router } from 'express';

import { AuthWithGithubController } from '../useCases/authWithGithub/AuthWithGithubController';

const router = Router();

const authWithGithubController = new AuthWithGithubController();

router.get('/github', (request: Request, response: Response) => {
  response.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`);
});

router.get('/auth/github/callback', (request: Request, response: Response) => {
  const { code } = request.query;

  response.json({ code });
});

router.post('/auth/github/', authWithGithubController.handle);

export default router;
