import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    ${({ theme }) => css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        background-color: ${theme["gray-800"]};
        color: ${theme["gray-100"]};
        -webkit-font-smoothing: antialiased;
      }

      :focus {
        outline: 0;
      }

      body,
      input,
      textarea,
      button {
        font: 400 1rem Roboto, sans-serif;
      }
    `}
`;
