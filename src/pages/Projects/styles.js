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
      height: 100%;
      margin-bottom: 60px;
    }

`;

export const ColumnLeft = styled.div`

  justify-content: space-between;
  width: 50%;
  left: 0;
  height:100%;
  padding: 20px;

  //for mobiles
  @media(max-width: 600px) {
      
      top:0;
      height: 50%;
      position: absolute;
      width: 100%;

    }

`;

export const ColumnRight = styled.div`

  
  width: 50%;
  right: 0;
  height:100%;
  padding: 20px;

  //for mobiles
  @media(max-width: 600px) {
      
      position: absolute;
      height:50%;
      bottom:0;
      width: 100%;
      padding: 10px 20px 20px;
    }

`;

export const Project = styled.div`

  display: flex;
  border: 1px solid #707070;
  height: 30%;
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.5);
  transition: 0.3s;
  margin-bottom: 20px;
  flex-direction: column;
  

   //for mobiles
  @media(max-width: 600px) {
      
      margin: 20px 0;
  }

  :hover{
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.7)
  }

  strong {
    padding: 30px 20px;
    font-size: 20px;
    height: 20%;

    //for ipads
    @media(max-width: 768px) {
      text-align: center;
    }

    //for mobiles
    @media(max-width: 600px) {
      
      font-size: 15px;
      padding: 10px 0;
    }
  }

  p {
    
    padding: 40px 0 0 20px ;

    //for ipads
    @media(max-width: 768px) {

      padding: 40px 10px 10px 20px;
      text-align: center;
    }

    //for mobiles
    @media(max-width: 600px) {
      
      font-size: 12px;
      padding: 20px 0 0 0;
     
    }

  }

`;
