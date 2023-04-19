import styled from 'styled-components'

export const AddresHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 0.5rem;

  width: 35rem;
  height: 2.75rem;
`

export const TextHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;

  width: 33rem;
  height: 2.75rem;

  h3 {
    width: 100%;
    height: 1.31rem;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.31rem;

    display: flex;
    align-items: center;

    color: ${(props) => props.theme['gray-800']};
  }

  h4 {
    width: 100%;
    height: 1.31rem;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.125rem;

    display: flex;
    align-items: center;

    color: ${(props) => props.theme['gray-700']};
  }
`
