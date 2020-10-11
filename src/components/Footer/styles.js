import styled from 'styled-components';

export const FooterWrapper = styled.div`

  width: 100%;
  height: 40px;
  background: #F5F5F5;
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 0px;
  border-top: 1px solid #707070;
  justify-content: space-between;
  /* position: absolute; */

  p {
    padding-left:20px;
    font-size: 10px;
  }

  a {
    padding: 0 80px 0 80px;
    color: #707070;
  }

  @media(max-width:653px) {
      width: 100vh;
    
  }
`;
