import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import Hero from "./components/Hero";
import Featured from "./components/Featured";
import Menu from "./components/Menu";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Featured />
      <Menu />
    </Router>
  );
}

export default App;
