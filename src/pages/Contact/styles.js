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
`;

export const LeftContainer = styled.div`

  display: flex;
  width:50%;
  position: absolute;
  align-items: center;
  height: 100%;
  justify-content: center;
  left:0;
  padding: 40px;
  flex-direction: column;
`;
