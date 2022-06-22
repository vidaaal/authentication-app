import styled, { css } from 'styled-components';

export const Button = styled.button<{ isEdit?: boolean }>`
  width: 100%;
  height: 100%;
  outline: 0;
  border: 0;
  background: ${({ theme }) => theme.colors.button.background};
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.button.primaryText};
  font-weight: 600;
  line-height: 22px;
  letter-spacing: -0.035em;

  ${({ isEdit }) => isEdit && css`
    border: 1px solid ${({ theme }) => theme.colors.button.border};
    background: none;
    color: ${({ theme }) => theme.colors.text.secondaryText};
  `}
`;
