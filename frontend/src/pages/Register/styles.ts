import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    padding: 17px 18px;
    justify-content: space-between;
    height: 100vh;
  }
`;

export const Outro = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 473px;
  width: 100%;
  margin-top: 18px;

  p {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.text.secondaryText};

    span {
      text-decoration: underline;
      font-weight: 600;
    }
  }
`;

export const Wrapper = styled.main`
  max-width: 473px;
  width: 100%;
  margin: 0 auto;
  padding: 48px 58px;
  border: 1px solid ${({ theme }) => theme.colors.border.secondary};
  border-radius: 24px;

  .logo {
    margin-bottom: 27px;
  }

  @media (max-width: 600px) {
    padding: 0;
    border: 0;
  }

  .headerInfo {
    h3 {
      font-size: 1.125rem;
      margin-bottom: 14px;
    }
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

  a + a {
    margin-left: 20px;
  }

  a {
    background: none;
    border: 0;
    width: 42px;
    height: 42px;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;
