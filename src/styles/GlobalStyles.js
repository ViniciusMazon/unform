import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: var(--text);
  }
  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;
    height: 100%;
    width: 100%;
  }
  *, button, input {
    border: 0;
    background: none;
    font-family: 'Montserrat', sans-serif;
  }
  html {
    background: var(--white);
  }
  :root {
    font-size: 60%;
    --dark-gray: #484848;
    --gray: #9C98A6;
    --gray-light: #E6E6F0;
    --red: #FF385C;
    --green: #2F95A3;
    --dark-green: #118696;
    --white: #FFF;
  }
  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
`;
