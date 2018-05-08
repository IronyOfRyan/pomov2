import styled from "styled-components";

const TimerBox = styled.div`
  margin-top: 100px;
  margin-bottom: 20px;
  text-align: center;
  width: 500px;
  @media (max-width: 500px) {
    margin: 20px 20px 0;
    width: auto;
  }
`;

const TimerCountDown = styled.div`
  margin-bottomdisplay: block;
  margin-right: auto;
  margin-left: auto;
  font-size: 150px;

  @media (max-width: 500px) {
    margin: 20px 20px 0;
    width: auto;
    font-size: 75px;
  }
`;

export { TimerBox, TimerCountDown };
