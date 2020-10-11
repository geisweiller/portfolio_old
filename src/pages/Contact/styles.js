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

export const RightContainer = styled.div`

  display: flex;
  justify-content: center;
  position: absolute;
  right: 0;
  bottom: 0;
  width: 50%;
  height: auto;
  top:0;
  padding: 40px;

  div {

    display: flex;  
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 80px;
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
  }

  input::placeholder {
      color:black;
      opacity: 0.3;
    }

  span.message {
    flex-direction: column;

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
    }
    
    button:hover{
      box-shadow: 0 8px 16px 0 rgba(0,0,0,0.7)
    }

    textarea {
      resize:none;
      width: 380px;
      height: 200px;
      font-family: "Roboto", sans-serif;
    }

    textarea::placeholder {
      color:black;
      opacity: 0.3;
      padding: 10px;
      font-size:14px;
    }
  }
`;

export const LeftContainer = styled.div`

  display: flex;
  width:50%;
  position: absolute;
  height: 100%;
  left:0;
  padding: 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  strong {
    font-size: 40px;
    margin: 60px;
  }

  div {

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 80px;
  }

  span {
    margin: 20px;
    display: flex;
    align-items: center;
    justify-content: center ;
  }

  p, a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
  }

  a:hover, a:active {
    font-weight: 700;
    text-decoration-color: black;
    transition: 0.3s;
    border-radius: 10px;
  }
`;
