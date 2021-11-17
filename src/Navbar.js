import React from 'react'
import { FaTimes, FaBars } from "react-icons/fa";

const Navbar = ({isSidebarOpen, setIsSidebarOpen}) => {
  
  const toggleSidebar = _ => {
    setIsSidebarOpen(!isSidebarOpen)
  }

    return (
        <nav className="navbar" id="navbar">
          <ul className="navbar__items">
            <li className="navbar__item">
              <a className="navbar__link" href="#welcome-section">Home</a>
            </li>
            <li className="navbar__item">
              <a className="navbar__link" href="#skills">Skills</a>
            </li>
            <li className="navbar__item">
              <a className="navbar__link" href="#projects">Projects</a>
            </li>
            <li className="navbar__item">
              <a className="navbar__link" href="#contact">Contact</a>
            </li>
            <li className="navbar__item">
              <button className="resume-btn">
                <a href="/download-resume-link-here">Resume</a>
              </button>
            </li>
          </ul>
          
          <button className="open-sidebar-btn" onClick={toggleSidebar}>
            {isSidebarOpen ? <FaTimes className="icon"/> : <FaBars className="icon"/>}
          </button>

        </nav>
    )
}

export default Navbar;
