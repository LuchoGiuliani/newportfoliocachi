import React, { useEffect, useState } from "react";

import "./index.css";

import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Horizontal from "./components/Horizontal";
import GridVideo from "./components/GridVideo";

import AboutMe from "./components/AboutMe";
import NewHero from "./components/NewHero";
import TextCarrousel from "./components/TextCarrousel";

import animateCursor from '../app'

function App() {
  // useEffect(() => {
  //   animateCursor();
  // }, []); // E
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);
  // }, []);

  // if (loading) {
  //   return <Loader onLoad={() => setLoading(false)} />;
  // }

  return (
    <main className="App ">
      {/* <div className='cursor'>
            <div className='cursor-inner'>
                <div id='cursor-id' className='cursor-id' >
                    CACHI|DESIGNER|AUDIOVISUAL
                </div>
            </div>
        </div> */}
      <NewHero className="" />
      <Navbar className="" />
      {/* <Hero /> */}
      <TextCarrousel />
      <GridVideo className="" />
      <TextCarrousel />
      <Horizontal />
      <AboutMe />
      {/* <Projects id="projects" className="" /> */}
      {/* <Footer className="" /> */}
     
    </main>
  );
}

export default App;
