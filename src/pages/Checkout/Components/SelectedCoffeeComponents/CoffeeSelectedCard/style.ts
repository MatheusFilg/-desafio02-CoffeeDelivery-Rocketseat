import styled from 'styled-components'

export const CoffeeSelectedContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  gap: 3.75rem;

  width: 23rem;
  height: 5rem;

  background: ${(props) => props.theme['gray-100']};

  border-bottom: 1px solid ${(props) => props.theme['gray-400']};
  padding-bottom: 6.5rem;
  margin-bottom: 1.5rem;

  span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.3125rem;

    display: flex;
    align-items: center;
    text-align: right;

    color: ${(props) => props.theme['gray-700']};
  }
`
export const CoffeeSelectedAmount = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.25rem;

  width: 16rem;
  height: 4rem;

  img {
    width: 4rem;
    height: 4rem;
  }
`
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

  width: 10.7rem;
  height: 3.8rem;

  h3 {
    width: 9.25rem;
    height: 1.3rem;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.3rem;

    display: flex;
    align-items: center;

    color: ${(props) => props.theme['gray-800']};
  }
`

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 0.5rem;
  width: 10.7rem;
  height: 2rem;
`

export const AmountContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 0.5rem;
  gap: 0.25rem;

  width: 4.5rem;
  height: 2rem;

  background: ${(props) => props.theme['gray-400']};
  border-radius: 6px;

  button {
    width: 0.875rem;
    height: 0.875rem;
    border: transparent;
    background: ${(props) => props.theme['gray-400']};
  }

  p {
    width: 1.25rem;
    height: 1.3125rem;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.3125rem;

    text-align: center;

    color: ${(props) => props.theme['gray-900']};
  }

  svg {
    cursor: pointer;
    color: ${(props) => props.theme['purple-500']};
    transition: 0.4s;

    :hover {
      color: ${(props) => props.theme['purple-700']};
    }
  }
`

export const RemoveButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0rem 0.5rem;
  gap: 0.25rem;

  width: 5.69rem;
  height: 2rem;

  background: ${(props) => props.theme['gray-400']};
  border-radius: 6px;
  border: transparent;
  cursor: pointer;
  transition: 0.4s;

  :hover {
    background: ${(props) => props.theme['gray-500']};
  }

  h4 {
    width: 3.44rem;
    height: 1.19rem;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1.19rem;

    text-transform: uppercase;

    color: ${(props) => props.theme['gray-700']};
  }
`
