import { ReactNode, InputHTMLAttributes } from 'react';
import * as S from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: ReactNode;
  label?: string;
  id: string;
}

export function Input({
  leftIcon, label, id, ...rest
}: InputProps) {
  return (
    <S.Container>
      {label && (
        <S.LabelWrapper>
          <label htmlFor={id}>{label}</label>
        </S.LabelWrapper>
      )}

      <S.Wrapper>
        {leftIcon && (
          <label htmlFor={id}>
            {leftIcon}
          </label>
        )}

        <S.Input id={id} {...rest} />
      </S.Wrapper>
    </S.Container>
  );
}
