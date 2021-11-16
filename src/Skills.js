import React from 'react'

const Skills = () => {
    return (
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
    )
}

export default Skills;
