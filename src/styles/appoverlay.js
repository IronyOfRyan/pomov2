import styled from "styled-components";

const Overlay = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 1);
  overflow-x: hidden;
  transition: 0.5s;

  a {
    padding: 8px;
    text-decoration: none;
    font-size: 36px;
    color: #818181;
    display: block;
    transition: 0.3s;

    &:hover {
      color: red;
    }
    &:focus {
      color: red;
    }
  }

  .closebtn {
    position: relative;
    text-align: center;
    margin-top: 250px;
    font-size: 30px;
  }

  h2 {
    color: white;
  }
  p {
    color: white;
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 90px;
`;

const Span = styled.span`
  margin-top: 100px;
  font-size: 13px;
  cursor: pointer;
`;

export { Overlay, Header, Span };
