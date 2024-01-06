import React from "react";

import "./index.css";

import Navbar from "./components/Navbar";
import Horizontal from "./components/Horizontal";
import GridVideo from "./components/GridVideo";
import AboutMe from "./components/AboutMe";
import NewHero from "./components/NewHero";
import TextCarrousel from "./components/TextCarrousel";

function App() {
  return (
    <main className="App ">
      <NewHero className="" />
      <Navbar className="" />
      <TextCarrousel />
      <GridVideo className="" />
      <TextCarrousel />
      <Horizontal />
      <AboutMe />
    </main>
  );
}

export default App;
