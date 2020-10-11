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

export const ProjectsContainer = styled.div`

  display: flex;
  height: 100%;
  width: 100%;
  padding: 50px 100px;
  align-items: center;
  
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
  position: relative;

  :hover{
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.7)
  }

  strong {
    padding: 30px 20px;
    font-size: 20px;
    height: 20%;
  }

  p {
    height: 80%;
    padding: 40px 0 0 20px ;
  }
  `;

export const ColumnLeft = styled.div`

  justify-content: space-between;
  width: 50%;
  left: 0;
  height:100%;
  padding: 20px;
`;

export const ColumnRight = styled.div`

  
  width: 50%;
  right: 0;
  height:100%;
  padding: 20px;
`;
