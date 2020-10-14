import styled from 'styled-components';

export const Wrapper = styled.div`  

  justify-content: space-between;
  width: 100%;
  position: absolute;
  top: 64px;
  bottom:40px;
  
  @media(max-width: 600px) {
      
      height: 100%;
    }


`;

export const UpperContainer = styled.div`

  background: #FFF;
  display: flex;
  height:50%;
  position: absolute;
  top: 10px;
  align-items: center;
  width: 100%;
  justify-content: space-between;

  @media(max-width: 600px) {
      
    align-items: center;
    position: relative;
    top: 10px;
    width: 100%;

  }



  span {
    display:flex;
    width:50%;
    display:flex;
    align-items: flex-end;
    justify-content: center;

      @media(max-width: 600px) {
      
      align-items: center;
      position: absolute;
      top: 0;
      width: 100%;
      flex-direction: column;
    }
 

    a {
      color: #FFF;
      background: #393636;
      font-weight: bold;
      padding: 20px;
      border-radius: 10px;
      border: 0;
      bottom: 100px;
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.5);
      margin-top: 60px;

      :hover{
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.7)
      }

      //for mobiles
      @media(max-width: 600px) {
      
       margin-top: 320px;
       padding: 10px;
       display: flex;
       font-size: 10px;
       align-items: center;
       font-weight: normal;
      }


      @media(max-width: 360px) {
        margin-top: 220px;
       
      } 
    }
  }

    
  

  strong {
    font-size:60px;
    display: flex;
    position: absolute;
    top: 100px;

    //for mobiles
    @media(max-width: 600px) {
      
      position: relative;
      top: 20px;
      font-size: 30px;
    
    }
  }

  p {
    padding: 50px;
    text-align: justify;

    @media(max-width: 600px) {
      
      padding: 100px 50px;
      font-size: 15px;
      
    }

    @media(max-width: 360px) {
      
      padding: 80px 40px;
      font-size: 12px;
    
    }
  }

`;

export const LowerContainer = styled.div`

  
  display: flex;
  height:50%;
  position: absolute;
  bottom: 0;
  align-items: center;
  width: 100%;
  justify-content: center;


  span {
    display:flex;
    width:50%;
    display:flex;
    align-items: flex-end;
    justify-content: center;

     //for mobiles
     @media(max-width: 600px) {
      
      align-items: center;
      position: absolute;
      top: 0;
      width: 100%;
    }
  }

  

  strong {
    font-size:60px;
    display: flex;
    position: absolute;
    bottom: 150px;
    
    //for ipads
    @media(max-width: 768px){
      margin-right:30px;
    }

    //for mobiles
    @media(max-width: 600px) {
      
      margin: 0;
      position: relative;
      font-size: 30px;
      bottom: 0;
      padding-top: 50px;
    }
  }

  p {
    padding: 50px;
    text-align: justify;
    
    //for mobiles
    @media(max-width: 600px) {
      
      font-size: 15px;
      padding: 150px 50px;
    }

    @media(max-width: 360px) {
      
      padding: 150px 40px 100px 40px;
      font-size: 12px;
    
    }
    

  }
`;
