import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar" id="navbar">
      <ul>
        <li className="navbar__item"><a className="navbar__link" href="#welcome-section">Home</a></li>
        <li className="navbar__item"><a className="navbar__link" href="#skills">Skills</a> </li>
        <li className="navbar__item"><a className="navbar__link" href="#projects">Projects</a></li>
        <li className="navbar__item"><a className="navbar__link" href="#contact">Contact</a></li>
        <li className="navbar__item">
          <button className="resume-btn">
            <a href="/download-resume-link-here">Resume</a>
          </button>
        </li>
      </ul>
    </nav>
    )
}

export default Navbar;
