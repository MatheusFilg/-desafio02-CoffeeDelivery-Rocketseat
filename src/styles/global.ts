import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:focus {
  outline: 0;
  box-shadow: transparent;
}

body {
  background: ${(props) => props.theme.white};
  color: ${(props) => props.theme['gray-900']};
  -webkit-font-smoothing: antialiased;
  position: relative;
}

body, input, textarea, button {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.125rem;
}

a {
  color: inherit;
  text-decoration: inherit; 
}

h1 {
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 800;
  font-size: 3rem;
  line-height: 3.9rem;
}

 input::-webkit-outer-spin-button,
 input::-webkit-inner-spin-button {
  -webkit-appearence: none;
  margin: 0;
}

input[type='number'] {
  -moz-appearance: textfield;
}

`
