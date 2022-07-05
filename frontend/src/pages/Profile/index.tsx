import { useNavigate } from 'react-router-dom';

import { Button } from '../../components/Button';

import { Header } from '../../components/Header';
import { useAuth } from '../../contexts/AuthContext';

import * as S from './styles';

export function Profile() {
  const navigate = useNavigate();

  const { user } = useAuth();

  return (
    <>
      <Header />

      <S.Container>
        <S.Wrapper>
          <S.InfoHeader>
            <h1>Personal info</h1>
            <p>Basic info, like your name and photo</p>
          </S.InfoHeader>

          <S.InfoWrapper>
            <S.InfoItemHeader>
              <div className="content">
                <h2>Profile</h2>
                <p>
                  Some info may be visible to other people
                </p>
              </div>

              <div className="editButton">
                <Button isEdit onClick={() => navigate('/profile/edit')}>
                  Edit
                </Button>
              </div>
            </S.InfoItemHeader>

            <S.InfoItem isImg>
              <p>PHOTO</p>

              <img src={user?.avatar} alt={user?.name} />
            </S.InfoItem>

            <S.InfoItem>
              <p>NAME</p>

              {user?.name ? (
                <div className="textItem">
                  <h3>{user?.name}</h3>
                </div>
              ) : (
                <div className="notFilled">
                  <h3>This field isn&apos;t filled</h3>
                </div>
              )}
            </S.InfoItem>

            <S.InfoItem>
              <p>BIO</p>

              {user?.bio ? (
                <div className="textItem">
                  <h3>{user?.bio}</h3>
                </div>
              ) : (
                <div className="notFilled">
                  <h3>This field isn&apos;t filled</h3>
                </div>
              )}
            </S.InfoItem>

            <S.InfoItem>
              <p>PHONE</p>

              {user?.phone ? (
                <div className="textItem">
                  <h3>{user?.phone}</h3>
                </div>
              ) : (
                <div className="notFilled">
                  <h3>This field isn&apos;t filled</h3>
                </div>
              )}
            </S.InfoItem>

            <S.InfoItem>
              <p>EMAIL</p>

              {user?.email ? (
                <div className="textItem">
                  <h3>{user?.email}</h3>
                </div>
              ) : (
                <div className="notFilled">
                  <h3>This field isn&apos;t filled</h3>
                </div>
              )}
            </S.InfoItem>

            <S.InfoItem>
              <p>PASSWORD</p>

              <div className="textItem">
                <h3>************</h3>
              </div>
            </S.InfoItem>
          </S.InfoWrapper>
        </S.Wrapper>
      </S.Container>
    </>
  );
}
