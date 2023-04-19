import styled from 'styled-components'

export const IntroContainer = styled.section`
  padding: 5.9rem 10rem 3.375rem 10rem;
  gap: 6.5rem;
  display: flex;
  width: 100%;
  height: 34rem;
`
export const LeftContainer = styled.div`
  width: 36.75rem;
  height: 17.25rem;

  display: flex;
  flex-direction: column;
  gap: 4rem;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  h1 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 3rem;
    line-height: 3.9rem;

    width: 36.75rem;
    height: 7.75rem;
  }

  h2 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.6rem;

    width: 36.75rem;
    height: 3.25rem;
  }
`
export const ItemContainer = styled.div`
  width: 35.5rem;
  height: 5.25rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2.5rem;
`
export const BenefitContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  height: 2rem;

  gap: 0.75rem;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.31rem;

  color: ${(props) => props.theme['gray-700']};

  p {
    width: 15.7rem;
  }
`
const ItemBase = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 0.5rem;
  gap: 0.5rem;

  width: 2rem;
  height: 2rem;

  border-radius: 1000px;
`
export const Item1 = styled(ItemBase)`
  background-color: ${(props) => props.theme['yellow-700']};
`

export const Item2 = styled(ItemBase)`
  background-color: ${(props) => props.theme['gray-700']};
`

export const Item3 = styled(ItemBase)`
  background-color: ${(props) => props.theme['yellow-500']};
`

export const Item4 = styled(ItemBase)`
  background-color: ${(props) => props.theme['purple-500']};
`

export const ImageContainer = styled.img`
  width: 29.75rem;
  height: 22.5rem;
`
