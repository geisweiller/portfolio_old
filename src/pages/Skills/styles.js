import styled from 'styled-components';

export const Wrapper = styled.div`
  
  display: flex;
  justify-content: center;
  width: 100%;
  position: absolute;
  top: 64px;
  bottom:40px;
  align-items: center;

  //for ipads
  @media(max-width: 768px) {

    position: relative;
    height: 100%;

  }
  
`;

export const TechContainer = styled.div`

  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 60px;
  position: absolute;

  //for ipads
  @media(max-width: 768px) {
      
    flex-direction: column;
      
  }

  //for mobiles
  @media(max-width: 600px) {
  
    padding: 20px;

  }
  
  
  
`;

export const Tech = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #707070;
  height: 60%;
  width: 20%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.5);
  transition: 0.3s;
  flex-direction: column;
  
  
  //for ipads  
  @media(max-width: 768px) {
      
    margin: 30px 0 50px 0;
    width: 100%;
    height: 30%;

  }

  //for mobiles
  @media(max-width: 600px) {
  
    margin: 0px 0 50px 0;
    height: 40%;

  }

  
  :hover{
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.7)
  }

  
  div {

    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50%;

    //for ipads
    @media(max-width: 768px) {

      padding: 10px;

    }

  
   

    img {
     
      padding-top: 20px;

      //for ipads
      @media(max-width: 768px) {

        margin: 20px 0 10px 0;

      }

      //for mobiles
      @media(max-width: 600px) {

        width: 60px;
        margin: 0;
        margin-top: 15px;
      }
    }
  }

  strong {
    padding: 20px;
    font-size: 20px;

    //for notebooks
    @media(max-width: 1360px) {
      
      font-size: 16px;
  
    }



    //for ipads
    @media(max-width: 768px) {
      
      padding-top: 5px;
  
    }

    //for mobiles
    @media(max-width: 600px) {
      
     padding-top: 5px;
    }

  }


  p {

    text-align: justify;
    padding: 20px;
    height: 100%;
    font-size: 15px;



    //for notebooks
    @media(max-width: 1360px) {
      
      font-size: 12px;
  
    }

    //for mobiles
    @media(max-width: 600px) {

      font-size: 10px;
      padding-top: 5px;
      
      
     }

  }
`;
