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

export function Register() {
  const { handleSubmit, register } = useForm();

  const { signUp, signInWithGithubUrl } = useAuth();

  async function handleCreateUser(data: any) {
    await signUp(data);
  }

  return (
    <S.Container>
      <S.Wrapper>
        <div className="logo">
          <img src={Logo} alt="devchallenges" />
        </div>

        <div className="headerInfo">
          <h3>
            Join thousands of learners from around the world
          </h3>

          <p>
            Master web development by making real-life projects.
            There are multiple paths for you to choose
          </p>
        </div>

        <form onSubmit={handleSubmit(handleCreateUser)}>
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
                Start coding now
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
                Already a member?
                {' '}
                <Link to="/login">
                  Login
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
          <span>Vinícius Vidal</span>
        </p>

        <p>devChallenge.io</p>
      </S.Outro>
    </S.Container>
  );
}
