import { createGlobalStyle } from "styled-components";

const styled = { createGlobalStyle };

const GlobalStyle = styled.createGlobalStyle`
  :root {
    --Desaturated-Dark-Cyan: hsl(180, 29%, 50%);
    --Light-Grayish-Cyan-Bg: hsl(180, 52%, 96%);
    --Light-Grayish-Cyan-Filter: hsl(180, 31%, 95%);
    --Dark-Grayish-Cyan: hsl(180, 8%, 52%);
    --Very-Dark-Grayish-Cyan: hsl(180, 14%, 20%);
    --White: hsl(0, 0%, 100%);
    --Black: hsl(0, 0%, 0%);
  }

  * {
    box-sizing: border-box;
    font-family: "League Spartan", sans-serif;
  }

  body {
    background-color: var(--Light-Grayish-Cyan-Bg);
    margin: 0;
  }
`;

export default GlobalStyle;
