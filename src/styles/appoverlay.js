import styled from "styled-components";

const Overlay = styled.div`
  width: 200 !important;
  height:10% !important;
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
    margin-top: 50px;
    font-size: 30px;
  }

  h1 {
    font-size: 150px;
    color: #d31027;

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
`;

const Wrapper = styled.div`
  text-align: center;
`;

const Span = styled.span`
  width:50%
  display: block;
  text-align: center;
  margin-top: 150px;
  margin-right: auto;
  margin-left: auto;
  font-size: 13px;
  cursor: pointer;
`;

export { Overlay, Wrapper, Span, ContentHolder };
