import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Root from "./Root";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@500&display=swap');
  /* other styles */
  box-sizing: border-box;
  a {
    text-decoration: none;
    color: black;
  }
`;

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Root />
    </BrowserRouter>
  );
}

export default App;
