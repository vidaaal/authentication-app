import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 0 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  max-width: 1216px;
  width: 100%;
  margin: 24px 0;
  
  display: flex;
  justify-content: space-between;
`;

export const ProfileWrapper = styled.div`
  position: relative;
`;

export const Actions = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: 0;
  
  > img {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    margin-right: 12px;
    user-select: none;
  }
`;

export const ActionsArrow = styled.div<{ isOpen: boolean }>`
  width: 24px;
  height: 24px;
  margin-left: 6px;
  
  > svg {
    transform: rotate(0deg);

    ${({ isOpen }) => isOpen && css`
      transform: rotate(-180deg);
    `}

    transition: all .2s;
  }
`;

export const ProfileModal = styled.div`
  position: absolute;
  z-index: 10;
  width: 188px;
  right: 0;
  bottom: -200px;
  border-radius: 12px;
  padding: 0 12px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  background: ${({ theme }) => theme.colors.background};
`;

export const ProfileSection = styled.section`
  position: relative;
  padding-bottom: 12px;
  padding: 12px 0;
  
  & + & {

    :before {
      content: '';
      position: absolute;
      top: 0;
      width: 100%;
      height: 1px;
      background: ${({ theme }) => theme.colors.border.tertiary};
    }
  }
`;

export const ProfileOption = styled.button<{ danger?: boolean }>`
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  background: none;
  border: 0;

  & + & {
    margin-top: 6px;
  }

  :hover {
    background: ${({ theme }) => theme.colors.hover.primary};
  }
  
  p {
    margin-left: 10px;
    margin-right: 12px;
    font-size: 0.75rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text.navLink};
  }

  ${({ danger, theme }) => danger && css`
    p {
      color: ${theme.colors.danger};
    }
  `}
`;
