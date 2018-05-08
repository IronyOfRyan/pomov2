import styled from "styled-components";

const Overlay = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  background-color: rgb(255, 255, 255);
  background-color: rgba(255, 255, 255, 1);
  overflow-x: hidden;
  transition: 0.5s;

  a {
    padding: 8px;
    text-decoration: none;
    font-size: 36px;
    color: #d31027;
    display: block;
    transition: 0.3s;

    &:hover {
      color: #000;
    }
    &:focus {
      color: #000;
    }
  }

  .closebtn {
    position: relative;
    text-align: center;
    margin-top: 250px;
    font-size: 30px;
  }

  h1 {
    font-size: 150px;
    color: #d31027;

    @media (max-width: 500px) {
      margin: 20px 20px 0;
      width: auto;
      font-size: 75px;
    }
  }

  h2 {
    color: #d31027;
  }
  p {
    color: #d31027;
  }
`;

const ContentHolder = styled.div`
  text-align: center;
  margin-bottom: 90px;
  width: 50%;
`;

const Header = styled.div`
  text-align: center;
`;

const Span = styled.span`
  margin-top: 100px;
  font-size: 13px;
  cursor: pointer;
`;

export { Overlay, Header, Span, ContentHolder };
