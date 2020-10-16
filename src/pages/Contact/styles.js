import styled from 'styled-components';

export const Wrapper = styled.div`  

  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: absolute;
  top: 64px;
  bottom:40px;

  
`;

export const RightContainer = styled.div` //UpperContainer in mobile

  display: flex;
  justify-content: center;
  position: absolute;
  right: 0;
  bottom: 0;
  width: 50%;
  height: auto;
  top:10px;
  padding: 40px; 
  

    //for mobiles
    @media(max-width: 600px) {
      
     
      width: 100%;
      height: 50%;
      background: #FFF;
     
    }

    //for mobiles 360px
    @media(max-width: 360px) {
      
      
      height: 60%;
      background: #FFF;
 
    }


  
  form {
    //for mobiles
    @media(max-width: 600px) {
        
        margin: 60px 0;
  

    }

    
  }  

  div {

    display: flex;  
    flex-direction: column;
    justify-content: center;
    align-items: center;

   
  }

  span {
    margin: 20px;
    display: flex;
    align-items: center;
    justify-content: center ;

   
  }

  input {
    padding: 10px;
    margin: 10px;
    width: 50%;

    //for ipads
    @media(max-width: 768px) {
      
      width: 120px;
      height: 40px;
      margin: 20px;
      }

    //for mobiles
    @media(max-width: 600px) {
        
        padding: 5px;
        margin: 0 5px;
        font-size: 12px;

    }

     //for mobiles 360px
    @media(max-width: 360px) {
        
      padding: 5px;
      margin: 3px;
    }
    
  }

  input::placeholder {
      color:black;
      opacity: 0.3;
    }

  span.message {
    flex-direction: column;

     //for mobiles 360px
     @media(max-width: 360px) {
      
      margin: 0 0 60px 0;
     }

    button {
      background: #393636;
      color: #FFF;
      font-weight: bold;
      padding: 20px;
      border-radius: 10px;
      border: 0;
      position:absolute;
      bottom: 100px;
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.5);
      margin-top: 20px;

      //for ipads
      @media(max-width: 768px) {
      
      margin-top: 0px;
      bottom: 200px;
  
      }

      //for mobiles
      @media(max-width: 600px) {
        
        padding: 8px;
        bottom: 25px;
      }

      //for mobile 360px
      @media(max-width: 360px) {
      
        bottom: 15px;
      }

       //height adjusment
       @media(max-height: 720px) {
      
        font-size: 12px;
        bottom: 24px;
      }

    }
    
    button:hover{
      box-shadow: 0 8px 16px 0 rgba(0,0,0,0.7)
    }

    textarea {
      resize:none;
      width: 400px;
      height: 200px;
      font-family: "Roboto", sans-serif;
      padding: 20px;

      //for ipads
      @media(max-width: 768px) {
      
      width: 280px;
      height: 180px;

      }

      //for mobiles
      @media(max-width: 600px) {
        
        width: 250px;
        height: 110px;

      }

      //for mobiles 360px
      @media(max-width: 360px) {
        
        width: 240px;
        height: 140px;
        

      }
    }

    textarea::placeholder {
      color:black;
      opacity: 0.3;
      font-size:14px;

      //for mobiles 360px
      @media(max-width: 360px) {
        
        font-size:12px;
        

      }
    }
  }
`;

export const LeftContainer = styled.div` //LowerContainer in mobile

  display: flex;
  width:50%;
  position: absolute;
  height: 100%;
  left:0;
  padding: 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

   //for mobiles
   @media(max-width: 600px) {
      
    
      width: 100%;
      height: 50%;
      bottom: 0;
      padding: 0;
    }


  strong {
    font-size: 40px;
    margin: 60px;

    //for ipads
    @media(max-width: 768px) {
      
      margin: 0;
      text-align: center;
      position: absolute;
      top: 40px;
      left: 200px;
      width: 100%;
      }

    //for mobiles
    @media(max-width: 600px) {
      
      position: absolute;
      font-size: 30px;
      left: 0;
      top: 30px;
    }

    //for mobiles 360px
    @media(max-width: 600px) {
      
      font-size: 20px;
    }
  }

  div {

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 80px;
    

    //for mobiles
    @media(max-width: 600px) {
      
      margin: 80px 0 0 0;
      padding: 40px;
    }

    //for mobiles
    @media(max-width: 600px) {
      
      margin: 60px 0 0 0;
    }
  }

  img {

    //for mobile
    @media(max-width: 600px) {
      
      width: 40px;
    }
  }

  span {
    margin: 20px;
    display: flex;
    align-items: center;
    justify-content: center ;

    //for mobile
    @media(max-width: 600px) {
      
      margin: 10px;
    }
  }

  p, a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;

    //for ipads
    @media(max-width: 768px) {
      
      text-align: left;
    }

    //for mobile
    @media(max-width: 600px) {
      
      font-size: 12px;
    }
  }

  a:hover, a:active {
    font-weight: 700;
    text-decoration-color: black;
    transition: 0.3s;
    border-radius: 10px;
    
  }

  a:visited {
    color: #363636;
  }

  p {
    @media(max-width: 768px) {
      
      padding-left: 15px;
     }
  }
`;
