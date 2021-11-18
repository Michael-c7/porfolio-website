import React, { useState } from 'react';
import Welcome from "./Welcome"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Skills from "./Skills"
import Projects from "./Projects"
import Contact from './Contact';
import Popupup from './Popupup';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  // first project is 0, second project is 1, ect...
  const [currentProjectDetailsNumber, setCurrentProjectDetailsNumber] = useState(0);
  
  return (
    <main>
      <Navbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
      <Welcome/>
      <Skills/>
      <Projects setCurrentProjectDetailsNumber={setCurrentProjectDetailsNumber}/>
      <Popupup currentProjectDetailsNumber={currentProjectDetailsNumber}/>
      <Contact/>
    </main>
  );
}

export default App;