import styled from 'styled-components'

export const PaymentFormContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;

  p {
    color: ${(props) => props.theme.red};
    grid-column: span 3;
  }
`
