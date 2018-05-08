import styled from "styled-components";

export default styled.div`
  color:white
  background: transparent;
  -webkit-user-select: none;  /* Chrome all / Safari all */
  -moz-user-select: none;     /* Firefox all */
  -ms-user-select: none;      /* IE 10+ */
  user-select: none;          /* Likely future */
  width: 650px;
  margin-top: 100px;
  padding: 40px;
  z-index: 1;
  margin-right: auto;
  margin-left: auto;
  margin-top: 100px;

  @media(max-width: 650px){
      margin: 20px 20px 0;
      width:auto;
  }
`;
