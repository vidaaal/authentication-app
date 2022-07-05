import axios from 'axios';
import jwt from 'jsonwebtoken';
import { User } from '../../entities/User';

import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IAccessTokenResponse {
  access_token: string;
}

interface IUserResponse {
  avatar_url: string,
  id: number,
  name: string,
  email: string;
  bio: string;
}

interface IResponse {
  token: string;
  user: User;
}

class AuthWithGithubUseCase {
  private usersRepository: IUsersRepository;

  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute(code: string): Promise<IResponse> {
    const url = 'https://github.com/login/oauth/access_token';

    const CLIENT_ID = process.env.GITHUB_CLIENT_ID;
    const CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;
    const { JWT_SECRET } = process.env;

    const { data: accessTokenResponse } = await axios.post<IAccessTokenResponse>(url, null, {
      params: {
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code,
      },
      headers: {
        Accept: 'application/json',
      },
    });

    const { data } = await axios.get<IUserResponse>('https://api.github.com/user', {
      headers: {
        authorization: `Bearer ${accessTokenResponse.access_token}`,
      },
    });

    const {
      avatar_url, name, email, bio,
    } = data;

    let user = await this.usersRepository.findByEmail(email);

    if (!user) {
      user = await this.usersRepository.create({
        name,
        email,
        avatar: avatar_url,
        bio,
        isSocialAuth: true,
      });
    }

    delete user.password;

    const token = jwt.sign({
      id: user.id,
    }, JWT_SECRET as string, {
      expiresIn: '1d',
    });

    return { token, user };
  }
}

export { AuthWithGithubUseCase };
