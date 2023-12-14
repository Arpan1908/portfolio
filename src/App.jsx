import React from "react";

import "./App.css";
import Hero from './components/Hero'
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="container">
      <Hero/>
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
