import styled from "styled-components";

const NumberForms = styled.div`
  display: block;
  margin-right: auto;
  margin-left: auto;
`;

const Form = styled.form`
  text-align: center;
  margin: auto;
  width: 50%;
  margin-bottom: 50px;
`;

const Label = styled.label`
  color: #d31027;
  display: block;
  font-size: 15px;
  text-align: center;
`;

const NumberInput = styled.input`
  font-size: 20px;
  color: #d31027;
  height: 50px;
  border-color: #d31027;
  text-align: center;
  margin: auto;
  width: 50%;
`;

export { NumberForms, Form, Label, NumberInput };
