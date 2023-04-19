import styled from 'styled-components'

export const CheckoutContainer = styled.form`
  display: flex;
  padding: 2.5rem 10rem 15rem;
  gap: 2rem;

  h1 {
    width: 10.6rem;
    height: 1.4rem;

    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.44rem;

    display: flex;
    align-items: center;

    margin-bottom: 1rem;
  }
`
export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;

  width: 40rem;
  height: 100%;

  /* border: 1px solid ${(props) => props.theme['yellow-700']}; */
`

export const DataForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;

  width: 40rem;
  height: 100%;
`
const BaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  gap: 2rem;

  background: ${(props) => props.theme['gray-100']};
  border-radius: 6px;

  width: 40rem;
  height: 100%;
`

export const AddresContainer = styled(BaseContainer)`
  height: 100%;
`

export const PaymentContainer = styled(BaseContainer)`
  height: 100%;
`

export const SelectedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 1rem;
`

export const SelectedBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  gap: 1.5rem;

  width: 28rem;
  height: 100%;

  background: ${(props) => props.theme['gray-100']};
  border-radius: 0.375rem 2.75rem;
  background-size: auto;
`

export const ConfirmButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 0.75rem 0.5rem;
  gap: 0.25rem;

  width: 23rem;
  height: 2.9rem;

  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme['yellow-500']};
  border-radius: 6px;
  border: transparent;

  cursor: pointer;

  text-transform: uppercase;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 0.75rem;
  line-height: 1.375rem;

  transition: 0.4s;

  :hover {
    background: ${(props) => props.theme['yellow-700']};
  }
`
