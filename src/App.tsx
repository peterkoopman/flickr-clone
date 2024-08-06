import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Album from "./components/Album/Album";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Album />
    </div>
  );
};

export default App;
