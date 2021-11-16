import React, {useState, useEffect} from 'react'
import { BsLinkedin, BsGithub, BsInfoCircleFill } from "react-icons/bs"
import { FaTimes, FaBars } from "react-icons/fa";
import Popupup from './Popupup';
const Projects = () => {
    const [showPopup, setShowPopup] = useState(false)

    const openPopupMenu = () => {
        let popupMenuContainer = document.querySelector(".more-info-popup__outer");
        document.body.classList.add('show-popup--body');
        popupMenuContainer.classList.add('show-popup');
        popupMenuContainer.style.top = `${window.pageYOffset}px`;
    }


    return (
        <section className="projects" id="projects">
        <header className="projects__header">
            <h2 className="projects__heading">Projects</h2>
            <div className="underline-l"></div>
        </header>
        <ul className="projects__cards">
          <li className="project__card">
            <div className="project__card__inner">
              <img className="project__card__img" src="https://camo.githubusercontent.com/00568dc18a19ffbd4b839fa4404c0816b4fe59e272aecd939fb85d28bd88b81e/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f76334f614a6a72657832444c4848634742512f67697068792e676966" alt="project"/>
              <button className="more-info__btn" onClick={openPopupMenu}>
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




          {/* OTHER CARDS */}
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


        {/* <Popupup/> */}
      </section>
    )
}

export default Projects
