import React from 'react'
import './About.css'

import ME from '../../assets/Rishabh.jpg';
const About = () => {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="me" />
                    </div>
                </div>
                <div className="about__content">
                    <p>
                        Experienced Full Stack Developer skilled in creating and deploying dynamic web applications, utilizing a wide array of technologies, frameworks, and programming languages.
                    </p>
                    <a href="#contact" className="btn btn-primary">
                        Let's Talk
                    </a>
                </div>
            </div>
        </section>
    )
}

export default About
