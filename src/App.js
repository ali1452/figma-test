import Header from "./components/header/Header";
import Hero from "./pages/hero/Hero";
import Footer from "./components/footer/Footer";
import { BodyContainer } from "./style";
import React from "react";

const App = () => {
  return (
    <BodyContainer>
      <Header />
      <Hero />
      <Footer />
    </BodyContainer>
  );
};

export default App;