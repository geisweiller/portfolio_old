import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Audiowide&display=swap');


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
  background: #F5F5F5;
  color:#707070;
  font-family: 'Roboto', sans-serif;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;

  strong#name {
    font-family: 'Audiowide', sans-serif
  }
}

a {
  text-decoration: none;
  cursor: pointer;
}

button {
  cursor: pointer;
}

`;
