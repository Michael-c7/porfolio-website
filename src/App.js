import React from 'react';
import Welcome from "./Welcome"
import Navbar from "./Navbar"
import Skills from "./Skills"
import Projects from "./Projects"
import Contact from './Contact';
import Popupup from './Popupup';

function App() {
  return (
    <main>
      <Navbar/>
      <Welcome/>
      <Skills/>
      <Projects/>
      <Popupup/>
      <Contact/>
    </main>
  );
}

export default App;