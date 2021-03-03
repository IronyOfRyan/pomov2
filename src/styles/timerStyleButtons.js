import styled from "styled-components";

const TimerButton = styled.button`
  text-transform: uppercase;
  height: 50px;
  font-size: 20px;
  text-align: center;
  width: 170px;
  display: inline-block;
  margin-left: 10px;
  margin-right: 10px;
  color: ${props => (props.pause ? "#d31027" : "#d31027")};
  background-color: ${props => (props.pause ? "#FFF" : "transparent")};
  border-color: ${props => (props.pause ? "#d31027" : "#FFF")};
  border-radius: 10px;

  &:hover {
    opacity: 0.5;
  }
`;

const Center = styled.div`
  margin-top: 200px;
  width: 400px;
  margin-bottom: 20px;
  margin-right: auto;
  margin-left: auto;
`;

export { TimerButton, Center };
