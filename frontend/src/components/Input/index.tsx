import {
  ReactNode, InputHTMLAttributes, forwardRef, ForwardRefRenderFunction,
} from 'react';
import * as S from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: ReactNode;
  label?: string;
  id: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({
  leftIcon, label, id, ...rest
}, ref) => (
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

      <S.Input id={id} autoComplete="off" {...rest} ref={ref} />
    </S.Wrapper>
  </S.Container>
);

export const Input = forwardRef(InputBase);
