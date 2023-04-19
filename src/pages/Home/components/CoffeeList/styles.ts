import styled from 'styled-components'

export const CoffeeListContainer = styled.section`
  padding: 3.375rem 10rem;
  width: 100%;
  height: 102.9rem;
`

export const CoffeeListHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  h1 {
    font-size: 2rem;
  }
`

export const CoffeeListBody = styled.div`
  height: 85rem;
  width: 100%;
  padding-top: 4.25rem;

  /* display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1.95rem; */

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 2.5rem;
`
