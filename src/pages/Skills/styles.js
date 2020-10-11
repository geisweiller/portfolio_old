import styled from 'styled-components';

export const Wrapper = styled.div`
  
  justify-content: center;
  width: 100%;
  position: absolute;
  top: 64px;
  bottom:40px;
  
`;

export const TechContainer = styled.div`

  display: flex;
  height: 100%;
  width: 100%;
  padding: 50px 100px;
  justify-content: space-between;
  align-items: center;
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
  
  :hover{
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.7)
  }

  img {

  }

  strong {
    padding-top: 20px;

  }


  p {

    text-align: center;
    padding: 20px;
  }
`;
