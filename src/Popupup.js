import React from 'react'
import { FaTimes, FaBars } from "react-icons/fa";
import projectDetailsData from './projectDetailsData';

const Popupup = ({currentProjectDetailsNumber}) => {
    const closePopupMenu = _ => {
      let popupMenuContainer = document.querySelector(".more-info-popup__outer");
      document.body.classList.remove('show-popup--body');
      popupMenuContainer.classList.remove('show-popup');
    }

    let stopAllYouTubeVideos = () => { 
      let iframes = document.querySelectorAll('iframe');
      Array.prototype.forEach.call(iframes, iframe => { 
        iframe.contentWindow.postMessage(JSON.stringify({ event: 'command', 
      func: 'stopVideo' }), '*');
     });
    }

    const closeFunctionality = _ => {
      stopAllYouTubeVideos()
      closePopupMenu()
    }

    const {
      name,
      videoSrc,
      description,
      tech,
      sourceCodeLink,
      liveWebsiteLink,
    } = projectDetailsData[currentProjectDetailsNumber]

    return (
        <div className="more-info-popup__outer">
          <section className="more-info-popup">
            <button className="popup__close-btn" onClick={closeFunctionality}><FaTimes className="icon"/></button>
            <h2 className="info__video__heading">Full Demo</h2>

            <div className="more-info-popup__inner">
              <div className="info__video-details">
                <div className="info__video-container">
                  <iframe className="info__video" src={videoSrc} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="true"></iframe>
                </div>
              </div>

              <div className="more-info-popup__details-container">
                <div className="info__description">
                  <h2 className="description__heading">Description</h2>
                  <p className="description__text">
                  {description}
                  </p>
                </div>
                <div className="info__tech">
                  <h2 className="info__tech__heading">Tech Used</h2>
                  <ul className="info__tech__items">
                    {tech.map((tech, index) => {
                      return (
                        <li className="info__tech__item" key={index}>{tech}</li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </div>
              <div className="project__info__links">
                <a className="project__info__link" href={sourceCodeLink} target="_blank" rel="noreferrer">Source Code</a>
                <a className="project__info__link" href={liveWebsiteLink} target="_blank" rel="noreferrer">Live Demo</a>
              </div>
          </section>
        </div>
    )
}

export default Popupup;
