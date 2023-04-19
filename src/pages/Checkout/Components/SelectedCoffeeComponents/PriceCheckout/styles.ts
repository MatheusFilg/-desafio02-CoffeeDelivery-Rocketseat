import styled from 'styled-components'

export const PriceCheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.75rem;

  width: 23rem;
  height: 5.75rem;
`

export const PrinceInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;

  width: 23rem;
  height: 1.3rem;

  h3,
  span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;

    display: flex;
    align-items: center;
    text-align: right;

    color: ${(props) => props.theme['gray-700']};
  }

  h3 {
    font-size: 0.875rem;
    line-height: 1.125rem;
  }

  span {
    font-size: 1rem;
    line-height: 1.3rem;
  }
`
export const TotalPrice = styled(PrinceInfo)`
  height: 1.625rem;

  color: ${(props) => props.theme['gray-800']};

  h3,
  span {
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.625rem;
  }
`
