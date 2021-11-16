import React from 'react'
import { FaTimes, FaBars } from "react-icons/fa";
const Popupup = () => {
    const closePopupMenu = _ => {
      let popupMenuContainer = document.querySelector(".more-info-popup__outer");
      document.body.classList.remove('show-popup--body');
      popupMenuContainer.classList.remove('show-popup');
    }

    return (
      // show-popup here
        <div className="more-info-popup__outer">
          <section className="more-info-popup">
            <button className="popup__close-btn" onClick={closePopupMenu}><FaTimes className="icon"/></button>
            <h2 className="info__video__heading">Full Demo</h2>

            <div className="more-info-popup__inner">
              <div className="info__video-details">
                <div className="info__video-container">
                  <iframe className="info__video" src="https://www.youtube.com/embed/lYOoWCv_PYE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="true"></iframe>
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
                    <li className="info__tech__item">HTML</li>
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
    )
}

export default Popupup
