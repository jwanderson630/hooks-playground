import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *, *:before, *:after {
  box-sizing: border-box;
}

html {
  font-size: 10px;
  font-family: 'Work Sans', sans-serif;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Work Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  background-color: #ffffff;
background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2327ae60' fill-opacity='0.33' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}
h1 {
    text-align: left;
    font-size: 2.5rem;
    margin-top: 0;
}
`;

export default GlobalStyles;
