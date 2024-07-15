// src/styles/GlobalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background-color: #212121;
    color: white;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
