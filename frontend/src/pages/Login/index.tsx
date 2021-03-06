import { useForm } from 'react-hook-form';
import { MdEmail, MdLock } from 'react-icons/md';
import { Link } from 'react-router-dom';

import Logo from '../../assets/images/devchallenges.svg';
import Facebook from '../../assets/images/Facebook.svg';
import Github from '../../assets/images/Github.svg';
import Google from '../../assets/images/Google.svg';
import Twitter from '../../assets/images/Twitter.svg';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { useAuth } from '../../contexts/AuthContext';

import * as S from './styles';

export function Login() {
  const { handleSubmit, register } = useForm();

  const { signIn, signInWithGithubUrl } = useAuth();

  async function handleSignIn(data: any) {
    await signIn(data);
  }

  return (
    <S.Container>
      <S.Wrapper>
        <div className="logo">
          <img src={Logo} alt="devchallenges" />
        </div>

        <h3>Login</h3>

        <form onSubmit={handleSubmit(handleSignIn)}>
          <S.FormGroup>
            <div className="formInput">
              <Input
                id="email-login-input"
                leftIcon={<MdEmail />}
                placeholder="Email"
                {...register('email')}
              />
            </div>

            <div className="formInput">
              <Input
                id="password-login-input"
                leftIcon={<MdLock />}
                placeholder="Password"
                {...register('password')}
              />
            </div>
          </S.FormGroup>

          <S.Actions>
            <S.SubmitButton>
              <Button type="submit">
                Login
              </Button>
            </S.SubmitButton>

            <div className="anotherOption">
              <p>
                or continue with these social profile
              </p>
            </div>

            <S.SocialLogins>
              <a href="/">
                <img src={Google} alt="Google" />
              </a>
              <a href="/">
                <img src={Facebook} alt="Facebook" />
              </a>

              <a href="/">
                <img src={Twitter} alt="Google" />
              </a>

              <a href={signInWithGithubUrl}>
                <img src={Github} alt="Google" />
              </a>
            </S.SocialLogins>

            <div className="registerLink">
              <p>
                Don???t have an account yet?
                {' '}
                <Link to="/register">
                  Register
                </Link>
              </p>
            </div>
          </S.Actions>
        </form>

      </S.Wrapper>

      <S.Outro>
        <p>
          created by
          {' '}
          <span>Vin??cius Vidal</span>
        </p>

        <p>devChallenge.io</p>
      </S.Outro>
    </S.Container>
  );
}
