import React from 'react';
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { GrDocumentDownload } from "react-icons/gr";
import { FaTimes, FaBars } from "react-icons/fa";

function App() {
  return (
    <main>
      <nav className="navbar">
        <ul className="navbar__items">
          <li className="navbar__item">
            <a href="#home">Home</a>
          </li>
          <li className="navbar__item">
            <a href="#skills">Skills</a>
          </li>
          <li className="navbar__item">
            <a href="#projects">Projects</a>
          </li>
          <li className="navbar__item">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <aside className="sidebar">
        <button className="sidebar__close-btn"><FaTimes/></button>

        <ul className="sidebar__items">
          <li className="sidebar__item">
            <a href="#home">Home</a>
          </li>
          <li className="sidebar__item">
            <a href="#skills">Skills</a>
          </li>
          <li className="sidebar__item">
            <a href="#projects">Projects</a>
          </li>
          <li className="sidebar__item">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="contact__icons">
          <button className="contact__icon">
            <a className="contact__icon__link" href="https://github.com/Michael-c7" target="_blank" rel="noreferrer">
              <BsGithub/>
            </a>
          </button>

          <button className="contact__icon">
            <a className="contact__icon__link" href="https://www.linkedin.com/in/michaelcarr1999/" target="_blank" rel="noreferrer">
              <BsLinkedin/>
            </a>
          </button>

          <button className="contact__icon">
            <a className="contact__icon__link" href="/download-resume-here" target="_blank" rel="noreferrer">
              <GrDocumentDownload/>
            </a>
          </button>
        </div>
      </aside>


      <section className="skills" id="skills">
        <h2 className="skills__heading">Skills</h2>
        <div className="skill__showcase">
          <div className="showcase__front-end">
              <h2 className="front-end_heading">Front-end</h2>
              <ul className="front-end__skills">
                <li className="front-end__skill">html5</li>
                <li className="front-end__skill">css3</li>
                <li className="front-end__skill">Sass</li>
                <li className="front-end__skill">Javascript</li>
                <li className="front-end__skill">React</li>
                <li className="front-end__skill">Redux</li>
              </ul>
            </div>
            <div className="showcase__tools">
              <h2 className="front-end_heading">Tools</h2>
              <ul className="front-end__skills">
                <li className="front-end__skill">Git & github</li>
                <li className="front-end__skill">Npm</li>
                <li className="front-end__skill">Webpack</li>
              </ul>
            </div>
        </div>
      </section>



      <section className="projects" id="projects">
        <ul className="projects__cards">
          <li className="project__card">
            <img src="https://html-css-portfolio-css-grid-project.netlify.app/images/project-1.jpeg" alt="project"/>
            <div className="project__info">
              <h2 className="project__info__heading">Project name</h2>
              <p  className="project__info__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Rerum eveniet amet odit aperiam,
                provident cum possimus sapiente minus quos! Ipsum?
              </p>
              <div  className="project__info__link">
                <a  className="project__info" href="/">Source Code</a>
                <a  className="project__info" href="/">Live Preview</a>
              </div>
            </div>
          </li>
        </ul>
      </section>


      <section className="contact" id="contact">
        <h2 className="contact__heading">Contact</h2>

        <div>Phone: <a href="tel:9522972048">(952) 297-2048</a></div>
        <div>Email: <a href="mailto: mcarr2468@gmail.com">mcarr2468@gmail.com</a></div>
        <div className="contact__icons">
          <button className="contact__icon">
            <a className="contact__icon__link" href="https://github.com/Michael-c7" target="_blank" rel="noreferrer">
              <BsGithub/>
            </a>
          </button>

          <button className="contact__icon">
            <a className="contact__icon__link" href="https://www.linkedin.com/in/michaelcarr1999/" target="_blank" rel="noreferrer">
              <BsLinkedin/>
            </a>
          </button>

          <button className="contact__icon">
            <a className="contact__icon__link" href="/download-resume-here" target="_blank" rel="noreferrer">
              <GrDocumentDownload/>
            </a>
          </button>
        </div>
       
      </section>
    </main>
  );
}

export default App;


// , 