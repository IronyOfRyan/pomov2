import styled from "styled-components";

const TimerButton = styled.button`
  color: ${props => (props.pause ? "#d31027" : "#FFF")};
  height: 50px;
  font-size: 20px;
  margin-bottom: 3px;
  margin-left: 25px;
  margin-right 25px;
  width: 200px;
  background-color: ${props => (props.pause ? "#FFF" : "transparent")};
  border-radius: 10px;
  border-color: ${props => (props.pause ? "#d31027" : "#FFF")};
  text-align:center;

  &:hover{
    opacity: 0.5;
  }
  @media(max-width: 200px){
      margin: 20px 20px 0;
      width:auto;
  }
`;

const Center = styled.div`
  margin-top: 130px;
  display: block;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 20px;
`;

export { TimerButton, Center };
