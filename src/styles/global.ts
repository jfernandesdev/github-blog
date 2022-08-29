import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  a {
    color: ${(props) => props.theme.blue};
    text-decoration: none;
    border-bottom: 1px solid transparent;
  }

  ::-webkit-scrollbar {
    width: 6px;
    height: 0;
  }
  ::-webkit-scrollbar,
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme['base-label']};
  }
  ::-webkit-scrollbar,
  ::-webkit-scrollbar-track {
    background: transparent;
  }

  :focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.blue};
  }

  body {
    background-color: ${(props) => props.theme['base-background']};
    color: ${(props) => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1rem 'Nunito', sans-serif;
  }
`
