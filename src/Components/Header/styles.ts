import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 3;

  padding: 2rem 10rem;
  gap: 52.5rem;

  height: 6.5rem;
  width: 100%;

  background: ${(props) => props.theme.white};
`

export const ActionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 0.75rem;
  width: 14.05rem;
  height: 2.375rem;
`
export const LocationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.25rem;

  width: 8.93rem;
  height: 2.375rem;

  background-color: ${(props) => props.theme['purple-300']};
  border-radius: 0.375rem;

  h3 {
    width: 6.31rem;
    height: 1.125rem;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.125rem;

    color: ${(props) => props.theme['purple-700']};
  }
`
export const CheckoutButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.25rem;

  width: 2.375rem;
  height: 2.375rem;

  background: ${(props) => props.theme['yellow-300']};
  border: transparent;
  border-radius: 6px;

  cursor: pointer;

  position: relative;

  span {
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    width: 1.25rem;
    height: 1.25rem;

    background: ${(props) => props.theme['yellow-700']};
    color: ${(props) => props.theme.white};
    border-radius: 1000px;

    top: calc(-1.25rem / 2);
    right: calc(-1.25rem / 2);

    font-size: 0.75rem;
    font-weight: 700;
  }
`
