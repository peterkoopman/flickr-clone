import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero/Hero";
import Gallery from "./components/Gallery/Gallery/Gallery";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Gallery />
    </div>
  );
};

export default App;
