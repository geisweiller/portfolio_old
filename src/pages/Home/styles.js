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
  width:100%; //width: 50% com imagem
  position: absolute;
  height: 100%;
  align-items: center;
  justify-content: center;
  text-align: center; //Sem Imagem
  font-size: 20px; //Sem Imagem

  strong {

  
  
    font-size:60px; //40px com imagem
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
   display: none; //Sem imagem

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
