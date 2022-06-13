import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 0 18px;
`;

export const Wrapper = styled.main`
  max-width: 473px;
  width: 100%;
  margin: 0 auto;
  margin-top: 197px;
  padding: 48px 58px;
  border: 1px solid ${({ theme }) => theme.colors.border.secondary};
  border-radius: 24px;

  .logo {
    margin-bottom: 27px;
  }
`;

export const FormGroup = styled.div`
  margin-top: 27px;
  
  .formInput + .formInput {
    margin-top: 14px;
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.text.secondaryText};

  .registerLink {
    p {
      a {
        color: ${({ theme }) => theme.colors.text.link};
      }
    }
  }
`;

export const SubmitButton = styled.div`
  width: 100%;
  height: 38px;

  margin-top: 22px;
  margin-bottom: 32px;
`;

export const SocialLogins = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 22px;
  margin-bottom: 32px;

  button + button {
    margin-left: 20px;
  }

  button {
    background: none;
    border: 0;
    cursor: pointer;
    width: 42px;
    height: 42px;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;
