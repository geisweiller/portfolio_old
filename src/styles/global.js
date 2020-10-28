import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`


* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

html, body, #root, #root>.app {
  height: 100%;
  
}


body {
  font-family: Arial, Helvetica, sans-serif;
  background: ${(props) => (props.theme === true ? '#202020' : '#F5F5F5')};
  color: ${(props) => (props.theme === true ? '#F5F5F5' : '#707070')};
  font-family: 'Roboto', sans-serif;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;

  @media screen and (min-width: 320px) and (max-width: 767px) and (orientation: landscape) {
  html {
    transform: rotate(-90deg);
    transform-origin: left top;
    width: 100vh;
    overflow-x: hidden;
    position: absolute;
    top: 100%;
    left: 0;
  }
}
  

  strong#name {
    font-family: 'Audiowide', sans-serif
  }
}

a {
  text-decoration: none;
  cursor: pointer;
  color: ${(props) => (props.theme === true ? '#F5F5F5' : '#363636')};
}


button {
  cursor: pointer;
}

`;
