import { ButtonHTMLAttributes, ReactNode } from 'react';
import * as S from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isEdit?: boolean;
}

export function Button({ children, isEdit, ...rest }: ButtonProps) {
  return (
    <S.Button isEdit={isEdit} {...rest}>
      {children}
    </S.Button>
  );
}
