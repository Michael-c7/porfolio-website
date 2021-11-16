import React from 'react'
import { BsLinkedin, BsGithub, BsInfoCircleFill } from "react-icons/bs";

const Contact = () => {
    return (
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
    )
}

export default Contact