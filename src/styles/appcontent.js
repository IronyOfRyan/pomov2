import styled from "styled-components";

export default styled.div`
  display: block;
  margin-right: auto;
  margin-left: auto;
  background: transparent;
  border: 4px #fff solid;
  -webkit-user-select: none; /* Chrome all / Safari all */
  -moz-user-select: none; /* Firefox all */
  -ms-user-select: none; /* IE 10+ */
  user-select: none; /* Likely future */
  width: 50%;
  height: 25%;
  z-index: 2;

  @media (max-width: 650px) {
    margin: 20px 20px 0;
    width: auto;
  }
`;
