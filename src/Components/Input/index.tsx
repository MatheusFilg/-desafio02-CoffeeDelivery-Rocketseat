import { InputHTMLAttributes, forwardRef } from 'react'
import {
  ErrorMessage,
  InputStyleContainer,
  InputStyled,
  InputWrapper,
  RigthText,
} from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string
  rightText?: string
}

// eslint-disable-next-line react/display-name
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, className, rightText, ...props }, ref) => {
    return (
      <InputWrapper className={className}>
        <InputStyleContainer hasError={!!error}>
          <InputStyled {...props} ref={ref} />
          {rightText && <RigthText>{rightText}</RigthText>}
        </InputStyleContainer>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </InputWrapper>
    )
  },
)
