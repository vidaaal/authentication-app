import { useRef } from 'react';
import { MdOutlineArrowBackIos } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

import { Header } from '../../../components/Header';
import { Input } from '../../../components/Input';
import { useAuth } from '../../../contexts/AuthContext';

import * as S from './styles';

export function ProfileEdit() {
  const navigate = useNavigate();

  const { user } = useAuth();

  const fileInput = useRef<HTMLInputElement>(null);

  return (
    <>
      <Header />

      <S.Container>
        <S.Wrapper>
          <S.GoBack>
            <button type="button" onClick={() => navigate('/profile')}>
              <MdOutlineArrowBackIos size={18} color="#2D9CDB" />
              <p>Back</p>
            </button>
          </S.GoBack>

          <S.Main>
            <S.MainHeader>
              <h2>Change Info</h2>
              <p>
                Changes will be reflected to every services
              </p>
            </S.MainHeader>

            <S.AvatarField>
              <div className="imageInput">
                <button type="button" onClick={() => fileInput.current?.click()}>
                  <input type="file" ref={fileInput} />
                  <img
                    src={user?.avatar}
                    alt={user?.name}
                  />
                </button>
              </div>

              <div className="imageInputLabel">
                <button type="button" onClick={() => fileInput.current?.click()}>
                  <p>CHANGE PHOTO</p>
                </button>
              </div>
            </S.AvatarField>

            <S.InputField>
              <Input
                id="name-input"
                label="Name"
                placeholder="Enter your name..."
              />
            </S.InputField>

            <S.InputField>
              <Input
                id="name-input"
                label="Name"
                placeholder="Enter your name..."
              />
            </S.InputField>

            <S.InputField>
              <Input
                id="name-input"
                label="Name"
                placeholder="Enter your name..."
              />
            </S.InputField>

            <S.InputField>
              <Input
                id="name-input"
                label="Name"
                placeholder="Enter your name..."
              />
            </S.InputField>

            <S.InputField>
              <Input
                id="name-input"
                label="Name"
                placeholder="Enter your name..."
              />
            </S.InputField>
          </S.Main>
        </S.Wrapper>
      </S.Container>

    </>
  );
}
