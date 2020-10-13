import styled from 'styled-components';

export const Wrapper = styled.div`

  justify-content: space-between;
  width: 100%;
  position: absolute;
  top: 64px;
  bottom:40px;
`;

export const WelcomeText = styled.span`
   //for mobiles 
   @media(max-width: 600px){

  
    text-align: center;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  width:50%;
  position: absolute;
  align-items: center;
  height: 100%;
  justify-content: center;

  strong {
    font-family: 'Quub', sans-serif;
    font-size:40px;
  }

  //for ipads
  @media(max-width: 768px){

    width:100%;
    align-items: center;
    justify-content: center;
    
    

    p {
      text-align: center;
    }
  }


`;

export const ImageContainer = styled.div`

   display: flex;
   justify-content: center;
   position: absolute;
   right: 0;
   bottom: 0;
   width: 50%;
   height: auto;
   top:0;

   img {
    
    height: 700px;
    position: absolute;
    bottom: 0;
    max-width: 100%;

  }
  //for ipads
  @media(max-width: 768px) {
  
    display: none;
    width: 0;
 
}


`;
