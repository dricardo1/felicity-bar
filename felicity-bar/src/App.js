import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import Hero from "./components/Hero/hero";
import Featured from "./components/Featured/featured";
import Menu from "./components/Menu/menu";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Featured />
      <Menu />
      <Footer />
    </Router>
  );
}

export default App;
