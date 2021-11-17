import React from 'react'
import { FaTimes } from "react-icons/fa";

const Sidebar = ({isSidebarOpen, setIsSidebarOpen}) => {
    return (
        <nav className={isSidebarOpen ? `sidebar sidebar-open ` : `sidebar`}>
          <ul className="sidebar__items">
            <li className="sidebar__item">
              <a className="sidebar__link" href="#welcome-section">Home</a>
            </li>
            <li className="sidebar__item">
              <a className="sidebar__link" href="#skills">Skills</a>
            </li>
            <li className="sidebar__item">
              <a className="sidebar__link" href="#projects">Projects</a>
            </li>
            <li className="sidebar__item">
              <a className="sidebar__link" href="#contact">Contact</a>
            </li>
            <li className="sidebar__item">
              <button className="resume-btn">
                <a href="/download-resume-link-here">Download Resume</a>
              </button>
            </li>
          </ul>
        </nav>
    )
}

export default Sidebar
