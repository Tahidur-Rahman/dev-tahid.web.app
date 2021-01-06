import React from 'react'
import './about.css'
import '../App.css'

function About() {
    return (
        <div className="about" id="about">
             <h1>About Me</h1>
        <div className="about__me">
        <img className="about__img" src="https://freepngimg.com/thumb/decorative_border/34537-2-tech-frame-clipart.png" alt=""/>
        <div className="about__text">
            I'm Tahid from Bangladesh and learning web development since January, 2020. I enjoy building projects, solving problems and making my imagination alive with code. I'm always hungry to learn something new.
        </div>
        </div>
        </div>
    )
}

export default About
