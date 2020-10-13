import styled from 'styled-components';

export const Wrapper = styled.div`  

  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
  top: 64px;
  bottom:40px;
  height: 100%;
  

  //for mobiles
  @media(max-width: 600px) {

      height: 100%;

    }

`;

export const ProjectsContainer = styled.div`

    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 50%;
    padding: 20px 0 40px 0;
    

  
   
`;

export const Project = styled.div`

  display: flex;
  border: 1px solid #707070;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.5);
  transition: 0.3s;
  margin: 20px 0;
  padding: 20px;
  flex-direction: column;
  width: 100%;

   //for mobiles
  @media(max-width: 600px) {
      
      margin: 20px 0;
  }

 

  strong {
    padding: 10px 20px;
    font-size: 20px;


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
    
    
    padding: 40px 0 40px 20px ;

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


  a {

    padding: 10px;
    margin: 20px 0;
    font-weight: bold;
    text-align: center;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.5);
    width: 100%;
    border-radius: 10px;
    background: #393636;
    color: #FFF;


      //for mobiles
      @media(max-width: 600px) {
        
        font-size: 10px;
        padding: 0;
        width: 100%;
      }

      //for ipads
      @media(max-width: 768px) {

        font-size: 10px;
        padding: 0;
        width: 100%;
      }

  }

  a:hover{
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.7)

  } 

  a:visited {
    color: #FFF;
  }



  
`;
