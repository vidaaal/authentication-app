import { MdEmail, MdLock } from 'react-icons/md';
import { Link } from 'react-router-dom';

import Logo from '../../assets/images/devchallenges.svg';
import Facebook from '../../assets/images/Facebook.svg';
import Github from '../../assets/images/Github.svg';
import Google from '../../assets/images/Google.svg';
import Twitter from '../../assets/images/Twitter.svg';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import * as S from './styles';

export function Login() {
  return (
    <S.Container>
      <S.Wrapper>
        <div className="logo">
          <img src={Logo} alt="devchallenges" />
        </div>

        <h3>Login</h3>

        <form>
          <S.FormGroup>
            <div className="formInput">
              <Input id="email-login-input" leftIcon={<MdEmail />} placeholder="Email" />
            </div>

            <div className="formInput">
              <Input id="password-login-input" leftIcon={<MdLock />} placeholder="Password" />
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
              <button type="button">
                <img src={Google} alt="Google" />
              </button>
              <button type="button">
                <img src={Facebook} alt="Facebook" />
              </button>

              <button type="button">
                <img src={Twitter} alt="Google" />
              </button>

              <button type="button">
                <img src={Github} alt="Google" />
              </button>
            </S.SocialLogins>

            <div className="registerLink">
              <p>
                Don’t have an account yet?
                {' '}
                <Link to="/register">
                  Register
                </Link>
              </p>
            </div>
          </S.Actions>
        </form>

      </S.Wrapper>
    </S.Container>
  );
}
