import styled from 'styled-components';

export const FooterWrapper = styled.div`

  width: 100%;
  height: 40px;
  background: ${(props) => (props.theme === true ? '#202020' : '#F5F5F5')};
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 0px;
  border-top: 1px solid #707070;
  justify-content: space-between;
  

  div.switch {
    display: flex;
    flex-direction: row;
    align-items: center;
  }


  p {
    
    font-size: 10px;

    //for ipads
    @media(max-width: 768px){
      font-size: 5px;
      text-align: center;
      
    }
  }

  a {
    padding: 0 80px 0 80px;
    color: ${(props) => (props.theme === true ? '#F5F5F5' : '#707070')};


    //for ipads
    @media(max-width: 768px){
      padding: 40px;
    }

    //for mobiles
    @media(max-width:600px) {
        
      font-size: 10px;
      padding: 8px;
      text-align: center;
    } 
  }

  
`;
