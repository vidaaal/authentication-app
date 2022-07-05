import { ButtonHTMLAttributes, ReactNode } from 'react';
import * as S from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isEdit?: boolean;
}

export function Button({ children, isEdit, ...rest }: ButtonProps) {
  const { type = 'button' } = { ...rest };

  return (
    <S.Button isEdit={isEdit} {...rest} type={type}>
      {children}
    </S.Button>
  );
}
