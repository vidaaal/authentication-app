import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 0 16px;
  height: 100%;
`;

export const Wrapper = styled.div`
  max-width: 845px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-top: 22px;
`;

export const GoBack = styled.div`
  button {
      background: none;
    border: 0;
    display: flex;
    align-items: center;

    p {
      margin-left: 8px;
      color: ${({ theme }) => theme.colors.text.blue};
    }
  }
`;

export const Main = styled.main`
  margin-top: 24px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.border.tertiary};
  border-radius: 12px;
  padding: 30px 46px 42px;
`;

export const MainHeader = styled.div`
  h2 {
    font-weight: 400;
    margin-bottom: 4px;
  }

  p {
    color: ${({ theme }) => theme.colors.text.secondaryText};
    font-size: 0.813rem;
    font-weight: 500;
  }
`;

export const AvatarField = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;
  margin-bottom: 32px;
  
  .imageInput {
    margin-right: 24px;

    input {
      display: none;
    }

    img {
      width: 72px;
      height: 72px;
      border-radius: 8px;
    }
  }

  .imageInputLabel {
    p {
      color: ${({ theme }) => theme.colors.text.secondaryText};
      font-size: 0.813rem;
      font-weight: 500;
    }
  }

  button {
    background: none;
    appearance: none;
    border: 0;
  }
`;

export const InputField = styled.div`
  & + & {
    margin-top: 24px;
  }

  width: 416px;
  height: 52px;
`;
