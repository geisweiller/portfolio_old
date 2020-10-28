import styled from 'styled-components';

export const HeaderWrapper = styled.div` 

  width: 100%;
  height: 64px;
  background: ${(props) => (props.theme === true ? '#202020' : '#F5F5F5')};
  display:flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 2px 4px 10px;
  
  position: absolute;
  top: 0;


  nav {
    display: flex;
    align-items: center;
    width: auto;
   
  }
  
  nav.nav-logo {

    //for mobiles 
    @media(max-width: 600px) {
      
      img {
        width: 80px;
      }
      
    }
  }

  a {
    font-weight: ${(props) => (props.theme === true ? 'normal' : 'bold')};
    padding: 0 60px 0 0;
    color: ${(props) => (props.theme === true ? '#F5F5F5' : '#707070')};

    //for mobiles
    @media(max-width:600px) {
    
      font-size: 10px;
      padding: 8px;
      text-align: center;
    } 
  }
  
  button {
  outline: none;
  background: none;
  border: 0;
  display: none;
  }

  aside {
    display:none;
  }

 
`;
