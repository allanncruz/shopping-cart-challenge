import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }


  a {
    text-decoration: auto;
  }

  body {
    background: #f8f9fc;
    font: 14px Roboto, sans-serif;
  }

  #root {
    max-width: 1020px;
    margin: 0 auto;
  }
`;
