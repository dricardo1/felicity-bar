import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: #fff;
}

body {
    font-family: 'Lato', 'Verdana', 'Arial', sans-serif;
    background-color: #222;
}

h1, h2 h3, h4, h5 {
    font-family: 'Ultra', 'Georgia', serif;
    font-weight: normal;
}
`;
