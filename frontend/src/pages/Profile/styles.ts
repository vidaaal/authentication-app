import styled, { css } from 'styled-components';

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

export const InfoHeader = styled.div`
  text-align: center;

  h1 {
    font-size: 2.25rem;
    font-weight: 400;
    margin-bottom: 8px;
  }

  p {
    font-size: 1.125rem;
    font-weight: 300;
  }
`;

export const InfoWrapper = styled.div`
  margin-top: 44px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.border.tertiary};
  border-radius: 12px;
`;

export const InfoItemHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 28px 48px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.quaternary};
  min-height: 73px;

  .content {
    h2 {
      font-weight: 400;
      margin-bottom: 4px;
    }

    p {
      color: ${({ theme }) => theme.colors.text.secondaryText};
      font-size: 0.813rem;
      font-size: 300;
    }
  }

  .editButton {
    width: 95px;
    height: 38px;
  }
`;

export const InfoItem = styled.div<{ isImg?: boolean }>`
  & + & {
    border-top: 1px solid ${({ theme }) => theme.colors.border.tertiary}
  }
  
  padding: 24px 94px 24px 48px;
  min-height: 73px;

  ${({ isImg }) => isImg && css`
    padding: 12px 94px 12px 48px;
  `}

  display: grid;
  grid-template-columns: 200px 1fr;
  align-items: center;

  > p {
    color: ${({ theme }) => theme.colors.text.secondaryText};
    font-size: 0.813rem;
    font-size: 300;
  }

  img {
    width: 72px;
    height: 72px;
    border-radius: 8px;
  }

  .textItem {
    h3 {
      font-size: 1.125rem;
      color: ${({ theme }) => theme.colors.text.text};
      font-weight: 500;
    }
  }

  .notFilled {
    h3 {
      font-size: 1rem;
      color: ${({ theme }) => theme.colors.text.secondaryText};
      font-weight: 500;
    }
  }
`;
