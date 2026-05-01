import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  #root {
    display: flex;
    flex-direction: column;
  }

  body {
    font-family: 'Segoe UI', 'Poppins', Tahoma, Geneva, Verdana, sans-serif;
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};
  }

  button {
    cursor: pointer;
  }
`