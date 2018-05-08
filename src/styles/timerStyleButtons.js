import styled from "styled-components";

const TimerButton = styled.button`
  color: white;
  height: 3rem;
  font-size: 2rem;
  margin-left: 10px;
  margin-right 10px;
  width: 18vw;
  background-color: transparent;
  border-radius: 10px;
  border-color: ${props => (props.pause ? "black" : "white")};
  text-align:center;

  &:hover{
    opacity: 0.5;
  }
`;

const Center = styled.div`
  display: block;
  margin-right: auto;
  margin-left: auto;
`;

export { TimerButton, Center };
