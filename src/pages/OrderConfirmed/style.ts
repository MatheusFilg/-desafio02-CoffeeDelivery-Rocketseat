import styled from 'styled-components'

export const OrderConfirmedContainer = styled.div`
  display: flex;
  gap: 6.5rem;

  padding: 5rem 10rem;

  height: 19.5rem;
  width: 100%;
`
export const ConfirmationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.3rem;
`

export const ConfirmationHeader = styled.div`
  gap: 0.25rem;

  width: 34.5rem;
  height: 4.25rem;

  h1 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 2rem;
    line-height: 2.6rem;

    color: ${(props) => props.theme['yellow-700']};
  }

  h2 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.6rem;

    color: ${(props) => props.theme['gray-800']};
  }
`

export const ConfirmationBody = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 2.5rem;
  gap: 2rem;
  width: 33rem;
  height: 17rem;

  border-radius: 6px 36px 6px 36px;

  background: ${(props) => props.theme.white};

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 7px 37px 7px 37px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  }

  /* borda de gradiente feito a partir do elemento before */
`
export const BaseInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 0.75rem;
  width: 100%;
  height: 2.6rem;
`
const BaseIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 0.5rem;
  gap: 0.5rem;

  border-radius: 1000px;
`
export const LocalIcon = styled(BaseIconContainer)`
  background: ${(props) => props.theme['purple-500']};
`
export const TimeIcon = styled(BaseIconContainer)`
  background: ${(props) => props.theme['yellow-500']};
`
export const PaymentIcon = styled(BaseIconContainer)`
  background: ${(props) => props.theme['yellow-700']};
`

export const InfoText = styled.div`
  width: 19.4rem;
  height: 2.6rem;

  font-family: 'Roboto';
  font-style: normal;
  font-size: 1rem;
  line-height: 1.3rem;
  color: ${(props) => props.theme['gray-700']};

  p {
    font-weight: 400;
  }

  strong {
    font-weight: 700;
  }
`

export const Illustration = styled.img`
  margin-top: 5.9rem;
  width: 30.75rem;
  height: 18.3rem;
`
