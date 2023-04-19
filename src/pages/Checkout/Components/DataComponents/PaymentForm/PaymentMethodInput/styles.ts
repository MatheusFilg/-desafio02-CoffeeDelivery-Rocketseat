import styled, { css } from 'styled-components'

export const PaymentMethodContainer = styled.div`
  input {
    visibility: hidden;
    appearance: none;
  }

  input:checked + label div {
    ${({ theme }) => css`
      background: ${theme['purple-300']};
      border: 1px solid ${theme['purple-500']};

      &:hover {
        background: ${theme['purple-300']};
      }
    `}
  }
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0rem 1rem;
  gap: 0.75rem;

  width: 11.125rem;
  height: 3.19rem;

  background: ${(props) => props.theme['gray-400']};
  border-radius: 6px; //
  border: 1px solid ${(props) => props.theme['gray-400']};

  color: ${(props) => props.theme['gray-700']};

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  line-height: 1.19rem;
  font-size: 0.75rem;
  text-transform: uppercase;

  transition: 0.4s;
  user-select: none;

  svg {
    color: ${(props) => props.theme['purple-500']};
  }

  &:hover {
    background: ${(props) => props.theme['gray-500']};
  }
`
