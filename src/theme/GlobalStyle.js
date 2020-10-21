import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,600');
  *, *::before, *::after {
    margin:0;
    padding:0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  html {
    font-size: 10px; 
  }
  
  body {
    font-size: 1.6rem;
    background-color: hsl(0, 0%, 12%);
    font-family: "Montserrat", sans-serif;
  }
`;
export default GlobalStyle;
