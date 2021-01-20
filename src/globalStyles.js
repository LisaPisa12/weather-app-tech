import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  margin:0;
  padding:0;
  font-family:'Poppins', sans-serif;
}

body{
  display:flex;
  align-items: center;
  justify-content: center;
  height:100vh;
  width:100vw;
}
`;
