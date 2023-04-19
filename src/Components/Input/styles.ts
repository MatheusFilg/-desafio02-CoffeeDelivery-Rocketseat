import styled, { css } from 'styled-components'

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  position: relative;
`

interface InputStyleContainerProps {
  hasError: boolean
}

export const InputStyleContainer = styled.div<InputStyleContainerProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;

  padding: 0.75rem;
  gap: 0.25rem;
  height: 2.625rem;
  transition: 0.4s;

  background: ${(props) => props.theme['gray-300']};

  border: 1px solid ${(props) => props.theme['gray-400']};
  border-radius: 4px;

  &:focus-within {
    border-color: ${(props) => props.theme['yellow-700']};
  }

  ${({ hasError }) =>
    hasError &&
    css`
      border-color: ${(props) => props.theme.red};
    `}
`
export const InputStyled = styled.input`
  flex: 1;
  background: none;
  border: none;

  height: 100%;

  font-size: 0.75rem;
  padding: 0 0.75rem;
  color: ${(props) => props.theme['gray-700']};

  ::placeholder {
    width: 11rem;
    height: 1.125rem;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.125rem;

    color: solid ${(props) => props.theme['gray-600']};
  }
`

export const RigthText = styled.p`
  font-size: 0.75rem;
  margin-right: 0.75rem;
  font-style: italic;
  color: ${(props) => props.theme['gray-600']};
`
export const ErrorMessage = styled.p`
  color: ${(props) => props.theme.red};
  font-weight: 400;
  font-size: small;
  line-height: 130%;
  width: 100%;
`
