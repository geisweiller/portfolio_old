import styled from 'styled-components';

export const Wrapper = styled.div`
  
  display: flex;
  justify-content: center;
  width: 100%;
  position: absolute;
  top: 64px;
  bottom:40px;

  //for mobiles
  @media(max-width: 600px) {
      
    position: relative;
  }
  
`;

export const TechContainer = styled.div`

  display: flex;
  height: 100%;
  width: 100%;
  padding: 50px 100px;
  justify-content: space-between;
  align-items: center;

  //for ipads
  @media(max-width: 768px) {
      
      flex-direction: column;
      
    }
  
  
`;

export const Tech = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #707070;
  height: 50%;
  width: 20%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.5);
  transition: 0.3s;
  flex-direction: column;
  
  //for ipads  
  @media(max-width: 768px) {
      
    margin: 0 0 20px 0;
    width: 100%;
    height: 30%;

  }

  
  :hover{
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.7)
  }

  img {
    //for ipads
    @media(max-width: 768px) {
      
      margin: 0 0 10px 0;
  
      }

    //for mobiles
    @media(max-width: 600px) {
      
      width: 60px;
      margin: 0;
      margin-top: 15px;
    }
    
  }

  strong {
    padding-top: 20px;

    //for ipads
    @media(max-width: 768px) {
      
      padding-top: 0;
  
    }

    //for mobiles
    @media(max-width: 600px) {
      
     padding-top: 0;
    }

  }


  p {

    text-align: center;
    padding: 20px;

    //for mobiles
    @media(max-width: 600px) {

      font-size: 10px;
      padding-top: 5px
     }

  }
`;
