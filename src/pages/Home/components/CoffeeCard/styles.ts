import styled from 'styled-components'

export const CoffeeCardContainer = styled.section`
  width: 100%;

  padding: 1.25rem;
  padding-top: 0;
  /* dando espaço das bordas menos no topo /\ */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 16rem;
  height: 19.4rem;

  background: ${(props) => props.theme['gray-100']};
  border-radius: 0.375rem 2.25rem;
  border: 2px solid ${(props) => props.theme['yellow-500']};

  img {
    width: 7.5rem;
    height: 7.5rem;

    margin-top: -1.75rem;
  }
`
export const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 0.25rem;
  margin-top: 0.75rem;
  margin-bottom: 1.75rem;
  flex-wrap: wrap;
  /* /\ pra caso tenha muitas tag não quebre o layout */

  max-width: 12.19rem;
  height: 1.3rem;

  span {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0.25rem 0.5rem;

    max-width: 5.06rem;

    background: ${(props) => props.theme['yellow-300']};
    border-radius: 100px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 0.625rem;
    line-height: 0.8125rem;
    color: ${(props) => props.theme['yellow-700']};

    text-transform: uppercase;

    /* se der problema com multiplas tag testa por um width pro texto */
  }
`

export const NameContainer = styled.h1`
  width: 13.5rem;
  height: 1.6rem;

  font-size: 1.25rem;
  display: flex;
  align-items: flex-end;
  text-align: center;
  justify-content: center;

  margin-bottom: -0.75rem;
`

export const DescriptionContainer = styled.h2`
  width: 13.5rem;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.125rem;

  text-align: center;

  color: ${(props) => props.theme['gray-600']};

  margin-bottom: 2.05rem;
`

export const BuyContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1.8rem;

  height: 2.375rem;
`
export const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.125rem;

  width: 4.19rem;
  height: 1.94rem;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 0.8125rem;
  line-height: 1.125rem;

  text-align: right;

  color: ${(props) => props.theme['gray-700']};

  span {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 1.5rem;
    line-height: 1.94;
  }
`

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 7.4rem;
  height: 2.4rem;
  gap: 0.5rem;
`

export const CounterContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  gap: 0.25rem;

  width: 4.5rem;
  height: 2.4rem;

  svg {
    color: ${(props) => props.theme['purple-500']};
    transition: 0.4s;

    :hover {
      color: ${(props) => props.theme['purple-700']};
    }
  }

  input {
    width: 2.5rem;
    height: 1.5rem;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.25rem;

    text-align: center;

    margin-bottom: 0.375rem;

    background: none;
    border: none;

    &:focus {
      outline: none;
    }
  }

  button {
    background: transparent;
    border: transparent;
    cursor: pointer;
  }
`
export const CheckoutButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.5rem;

  width: 2.4rem;
  height: 2.4rem;

  background: ${(props) => props.theme['purple-700']};
  border-radius: 6px;

  cursor: pointer;
  transition: 0.4s;

  :hover {
    background: ${(props) => props.theme['purple-500']};
  }
`
