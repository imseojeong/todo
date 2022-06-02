import { css } from '@emotion/react'

export const GlobalStyle = css`
  * {
    margin: 0;
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  html {
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  }

  body {
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button,
  input,
  select,
  textarea {
    background-color: transparent;
    border: 0;
    &:focus {
      outline: none;
      box-shadow: none;
    }
  }

  button {
    padding: 0;
    cursor: pointer;
  }

  ul,
  ol {
    padding-left: 0;
    list-style: none;
  }
`
