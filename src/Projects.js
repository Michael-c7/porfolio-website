import React, {useState, useEffect} from 'react'
import { BsInfoCircleFill } from "react-icons/bs"
import Popupup from './Popupup';


const Projects = ({setCurrentProjectDetailsNumber}) => {
    const openPopupMenu = () => {
        let popupMenuContainer = document.querySelector(".more-info-popup__outer");
        document.body.classList.add('show-popup--body');
        popupMenuContainer.classList.add('show-popup');
        popupMenuContainer.style.top = `${window.pageYOffset}px`;
    }

    const openMoreInfoBtnFunctionality = (currentNum) => {
      setCurrentProjectDetailsNumber(currentNum)
      openPopupMenu()
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
              <div className="project__info">
                <h2 className="project__info__heading">OKFOOD</h2>
                <button className="btn-secondary">
                  <a className="project__info__link" href="https://github.com/Michael-c7/OKFOOD-restaurant" target="_blank" rel="noreferrer">Source Code</a>
                </button>
                <button className="btn-secondary">
                  <a className="project__info__link" href="https://amazing-rosalind-9ceb00.netlify.app" target="_blank" rel="noreferrer">Live Demo</a>
                </button>
                <button className="btn-primary" onClick={() => openMoreInfoBtnFunctionality(0)}>Learn More</button>
              </div>
            </div>
          </li>







          <li className="project__card">
            <div className="project__card__inner">
              <img className="project__card__img" src="https://camo.githubusercontent.com/27c0ad5d57ba6eb7cf8e050cbc944405d0a7aff8f3a4257daf8cb7ecac5d402d/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f6c4f734a5a65776176616874326449634e702f67697068792e676966" alt="project"/>
              <div className="project__info">
                <h2 className="project__info__heading">E-COMMERCE</h2>
                <button className="btn-secondary">
                  <a className="project__info__link" href="https://github.com/Michael-c7/OKFOOD-restaurant" target="_blank" rel="noreferrer">Source Code</a>
                </button>
                <button className="btn-secondary">
                  <a className="project__info__link" href="https://amazing-rosalind-9ceb00.netlify.app" target="_blank" rel="noreferrer">Live Demo</a>
                </button>
                <button className="btn-primary" onClick={() => openMoreInfoBtnFunctionality(1)}>Learn More</button>
              </div>
            </div>
          </li>
          
      {/* OTHER CARDS */}
      <li className="project__card">
            <div className="project__card__inner">
              <img className="project__card__img" src="https://camo.githubusercontent.com/00568dc18a19ffbd4b839fa4404c0816b4fe59e272aecd939fb85d28bd88b81e/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f76334f614a6a72657832444c4848634742512f67697068792e676966" alt="project"/>
              <div className="project__info">
                <h2 className="project__info__heading">OKFOOD</h2>
                <button className="btn-secondary">
                  <a className="project__info__link" href="https://github.com/Michael-c7/OKFOOD-restaurant" target="_blank" rel="noreferrer">Source Code</a>
                </button>
                <button className="btn-secondary">
                  <a className="project__info__link" href="https://amazing-rosalind-9ceb00.netlify.app" target="_blank" rel="noreferrer">Live Demo</a>
                </button>
                <button className="btn-primary" onClick={() => openMoreInfoBtnFunctionality(0)}>Learn More</button>
              </div>
            </div>
          </li>

          <li className="project__card">
            <div className="project__card__inner">
              <img className="project__card__img" src="https://camo.githubusercontent.com/00568dc18a19ffbd4b839fa4404c0816b4fe59e272aecd939fb85d28bd88b81e/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f76334f614a6a72657832444c4848634742512f67697068792e676966" alt="project"/>
              <div className="project__info">
                <h2 className="project__info__heading">OKFOOD</h2>
                <button className="btn-secondary">
                  <a className="project__info__link" href="https://github.com/Michael-c7/OKFOOD-restaurant" target="_blank" rel="noreferrer">Source Code</a>
                </button>
                <button className="btn-secondary">
                  <a className="project__info__link" href="https://amazing-rosalind-9ceb00.netlify.app" target="_blank" rel="noreferrer">Live Demo</a>
                </button>
                <button className="btn-primary" onClick={() => openMoreInfoBtnFunctionality(0)}>Learn More</button>
              </div>
            </div>
          </li>
        </ul>


        {/* <Popupup/> */}
      </section>
    )
}

export default Projects
