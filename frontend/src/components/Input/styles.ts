import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const LabelWrapper = styled.div`
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 1px solid ${({ theme }) => theme.colors.border.secondary};
  border-radius: 8px;
  
  label {
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 12px;

    svg {
      width: 24px;
      height: 24px;
      flex-shrink: 0;

      color: ${({ theme }) => theme.colors.input.iconPrimary};
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 12px;
  border: 0;
  outline: 0;
  color: ${({ theme }) => theme.colors.input.primary};

  ::placeholder {
    color: ${({ theme }) => theme.colors.input.primary};
  }
`;
