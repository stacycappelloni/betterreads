import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    color: #fff;
    background-color: #4a2812;
    padding: 0vh 5vh 0vh 5vh;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  h1{
    font-size: 4rem;
  }

  a {
    color: #0887a3;
    text-decoration: underline;
  }

  * {
    box-sizing: border-box;
  }
`

export default GlobalStyle
