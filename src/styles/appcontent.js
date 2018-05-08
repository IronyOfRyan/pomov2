import styled from "styled-components";

export default styled.div`
  display: block;
  margin-right: auto;
  margin-left: auto;
  color:white
  background: transparent;
  -webkit-user-select: none;  /* Chrome all / Safari all */
  -moz-user-select: none;     /* Firefox all */
  -ms-user-select: none;      /* IE 10+ */
  user-select: none;          /* Likely future */
  width: 100%;
  height:100%;
  margin-top: 100px;
  z-index: 1;

  @media(max-width: 650px){
      margin: 20px 20px 0;
      width:auto;
  }
`;
