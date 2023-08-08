import React from 'react';
import "./About.scss";
import Aboutme from '../../Components/AboutMe/Aboutme';
import Education from '../../Components/Education/Education';
import Skills from '../../Components/Skills/Skill';

const About = () => {
  return (
    <div className='about'>
      <Aboutme />
      <Education />
      <Skills />
    </div>
  )
}

export default About;