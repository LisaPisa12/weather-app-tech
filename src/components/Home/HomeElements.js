import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormH1 = styled.h1`
  font-weight: 500;
  color: black;
`;

export const FormH3 = styled.h3`
  font-weight: 300;
  color: black;
`;

export const FormInput = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: black;
  background: #eff0f6;
  border: none;
  border-radius: 15px;
  height: 60px;
  width: 80%;
`;

export const FormBtn = styled.button`
  color: white;
  background: #5f2eea;
  height: 60px;
  width: 80%;
  border: none;
  margin-top: 20px;
  text-align: center;
  border-radius: 15px;
  &: hover {
    background: white;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #5f2eea;
    border: 2px solid #5f2eea;
  }
`;
