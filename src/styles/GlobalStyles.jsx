// src/styles/GlobalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background-color: #f0f0f0;
    color: #333;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
