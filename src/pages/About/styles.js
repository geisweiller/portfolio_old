import styled from 'styled-components';

export const Wrapper = styled.div`  

  justify-content: space-between;
  width: 100%;
  position: absolute;
  top: 64px;
  bottom:40px;

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

  span {
    display:flex;
    width:50%;
    display:flex;
    align-items: flex-end;
    justify-content: center;
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
  }

  button:hover{
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.7)
  }

  strong {
    font-size:60px;
    display: flex;
    position: absolute;
    top: 100px;
  }

  p {
    padding: 50px;
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
  }


  strong {
    font-size:60px;
    display: flex;
    position: absolute;
    bottom: 150px;
  }

  p {
    padding: 50px;
  }
`;
