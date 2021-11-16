import React from 'react';
import { BsLinkedin, BsGithub, BsInfoCircleFill } from "react-icons/bs";
import { GrDocumentDownload } from "react-icons/gr";
import { FaTimes, FaBars } from "react-icons/fa";

{/*
PLAY / PAUSE A GIF
https://codepen.io/chriscoyier/pen/pogQJER 
*/}


function App() {
  return (
    <main>
      {/*Put resume download in navbar
          button type styles for it(it is a button)
          */}

    {/*close sidebar as soon as a link is clicked
    OR i could have it dropdown from the top like OKFOOD demo site
    */}
    <nav className="navbar" id="navbar">
      <ul>
        <li className="navbar__item"><a href="#welcome-section">Home</a></li>
        <li className="navbar__item"><a href="#skills">Skills</a> </li>
        <li className="navbar__item"><a href="#projects">Projects</a></li>
        <li className="navbar__item"><a href="#contact">Contact</a></li>
        <li className="navbar__item">
          <button className="resume-btn"><a href="/download-resume-link-here">Resume</a></button>
        </li>
      </ul>
    </nav>

    <section className="welcome-section" id="welcome-section">
      <div class="welcome-msg">
        <h1>Hey I'm Michael</h1>
        <h2>a web developer</h2>
      </div>
    </section>


    <section className="skills" id="skills">
        <header className="skills__header underline-container">
          <h2 className="skills__heading">Skills</h2>
          <div className="underline"></div>
        </header>
        <div className="skill__showcase">
          <div className="showcase__showcase__container">
              <h2 className="front-end_heading">Front End</h2>
              <ul className="front-end__skills">
                <li className="front-end__skill">HTML</li>
                <li className="front-end__skill">CSS</li>
                <li className="front-end__skill">Sass</li>
                <li className="front-end__skill">Javascript</li>
                <li className="front-end__skill">React</li>
                <li className="front-end__skill">Redux</li>
              </ul>
            </div>
            <div className="showcase__showcase__container">
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
        <header className="projects__header">
            <h2 className="projects__heading">Projects</h2>
            <div className="underline-l"></div>
        </header>
        <ul className="projects__cards">
        {/*TEST CARD */}
          <li className="project__card">
            <div className="project__card__inner">
              <img className="project__card__img" src="https://camo.githubusercontent.com/00568dc18a19ffbd4b839fa4404c0816b4fe59e272aecd939fb85d28bd88b81e/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f76334f614a6a72657832444c4848634742512f67697068792e676966" alt="project"/>            <button className="more-info__btn">
                <BsInfoCircleFill className="icon"/>
              </button>
              <div className="project__info">
                <h2 className="project__info__heading">OKFOOD</h2>
                <p className="project__info__description">
                A restaurant website.
                </p>
                <div className="project__info__links">
                  <a className="project__info__link" href="https://github.com/Michael-c7/OKFOOD-restaurant" target="_blank" rel="noreferrer">Source Code</a>
                  <a className="project__info__link" href="https://amazing-rosalind-9ceb00.netlify.app" target="_blank" rel="noreferrer">Live Demo</a>
                </div>
              </div>
            </div>
          </li>

          <li className="project__card">
            <div className="project__card__inner">
              <img className="project__card__img" src="https://camo.githubusercontent.com/00568dc18a19ffbd4b839fa4404c0816b4fe59e272aecd939fb85d28bd88b81e/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f76334f614a6a72657832444c4848634742512f67697068792e676966" alt="project"/>            <button className="more-info__btn">
                <BsInfoCircleFill className="icon"/>
              </button>
              <div className="project__info">
                <h2 className="project__info__heading">OKFOOD</h2>
                <p className="project__info__description">
                A restaurant website.
                </p>
                <div className="project__info__links">
                  <a className="project__info__link" href="https://github.com/Michael-c7/OKFOOD-restaurant" target="_blank" rel="noreferrer">Source Code</a>
                  <a className="project__info__link" href="https://amazing-rosalind-9ceb00.netlify.app" target="_blank" rel="noreferrer">Live Demo</a>
                </div>
              </div>
            </div>
          </li>

          <li className="project__card">
            <div className="project__card__inner">
              <img className="project__card__img" src="https://camo.githubusercontent.com/00568dc18a19ffbd4b839fa4404c0816b4fe59e272aecd939fb85d28bd88b81e/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f76334f614a6a72657832444c4848634742512f67697068792e676966" alt="project"/>            <button className="more-info__btn">
                <BsInfoCircleFill className="icon"/>
              </button>
              <div className="project__info">
                <h2 className="project__info__heading">OKFOOD</h2>
                <p className="project__info__description">
                A restaurant website.
                </p>
                <div className="project__info__links">
                  <a className="project__info__link" href="https://github.com/Michael-c7/OKFOOD-restaurant" target="_blank" rel="noreferrer">Source Code</a>
                  <a className="project__info__link" href="https://amazing-rosalind-9ceb00.netlify.app" target="_blank" rel="noreferrer">Live Demo</a>
                </div>
              </div>
            </div>
          </li>

          <li className="project__card">
            <div className="project__card__inner">
              <img className="project__card__img" src="https://camo.githubusercontent.com/00568dc18a19ffbd4b839fa4404c0816b4fe59e272aecd939fb85d28bd88b81e/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f76334f614a6a72657832444c4848634742512f67697068792e676966" alt="project"/>            <button className="more-info__btn">
                <BsInfoCircleFill className="icon"/>
              </button>
              <div className="project__info">
                <h2 className="project__info__heading">OKFOOD</h2>
                <p className="project__info__description">
                A restaurant website.
                </p>
                <div className="project__info__links">
                  <a className="project__info__link" href="https://github.com/Michael-c7/OKFOOD-restaurant" target="_blank" rel="noreferrer">Source Code</a>
                  <a className="project__info__link" href="https://amazing-rosalind-9ceb00.netlify.app" target="_blank" rel="noreferrer">Live Demo</a>
                </div>
              </div>
            </div>
          </li>
        </ul>


        <div className="more-info-popup__outer">
          <section className="more-info-popup">
            <button className="popup__close-btn"><FaTimes className="icon"/></button>
            <h2 className="info__video__heading">Full Demo</h2>

            <div className="more-info-popup__inner">
              <div className="info__video-details">
                {/* Video here */}
                <div className="info__video-container">
                  <iframe className="info__video" src="https://www.youtube.com/embed/lYOoWCv_PYE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                </div>
              </div>

              <div className="more-info-popup__details-container">
                <div className="info__description">
                  <h2 className="description__heading">Description</h2>
                  <p className="description__text">
                  In this quick video, 
                  I’ll show you how to embed a YouTube video in HTML,
                  how to make it responsive on any sized device and I’ll reveal
                  how you can easily adjust embed options such as autoplay.
                  This will work for any iframes such as google maps iframe.
                  </p>
                </div>
                <div className="info__tech">
                  <h2 className="info__tech__heading">Tech Used</h2>
                  <ul className="info__tech__items">
                    <li className="info__tech__item">HTML / CSS</li>
                    <li className="info__tech__item">CSS</li>
                    <li className="info__tech__item">Sass</li>
                    <li className="info__tech__item">React</li>
                  </ul>
                </div>
              </div>
            </div>
              <div className="project__info__links">
                <a className="project__info__link" href="https://github.com/Michael-c7/OKFOOD-restaurant" target="_blank" rel="noreferrer">Source Code</a>
                <a className="project__info__link" href="https://amazing-rosalind-9ceb00.netlify.app" target="_blank" rel="noreferrer">Live Demo</a>
              </div>
          </section>
        </div>
      </section>
    
    



      


      <section className="contact" id="contact">
        <header className="contact__header">
            <h2 className="contact__heading">Contact</h2>
            <div className="underline"></div>
        </header>

        <div className="contact__item">Phone: <a href="tel:9522972048">(952) 297-2048</a></div>
        <div className="contact__item">Email: <a href="mailto: mcarr2468@gmail.com">mcarr2468@gmail.com</a></div>
        <div className="contact__icons">
          <button className="contact__icon">
            <a className="contact__icon__link" href="https://github.com/Michael-c7" target="_blank" rel="noreferrer">
              <BsGithub className="icon"/>
            </a>
          </button>

          <button className="contact__icon">
            <a className="contact__icon__link" href="https://www.linkedin.com/in/michaelcarr1999/" target="_blank" rel="noreferrer">
              <BsLinkedin className="icon"/>
            </a>
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;