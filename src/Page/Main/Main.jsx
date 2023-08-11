import React from 'react';
import { Link } from 'react-router-dom';
import "./Main.scss";

import LandingPage from '../../Components/LandingPage/LandingPage';
import aboutimage from "../../assets/about.png";

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Fade from 'react-reveal/Fade';

const Main = () => {
  return (
    <div className='main'>
      <LandingPage />
      <div className='intro'>
        <Fade><h1 className='heading'>Let me introduce <span className='headspan'>myself</span></h1></Fade>
        <div className='about-wrapper'>

          <div className='about-content'>
            <Fade left>
              <span>
                Hi everyone, I am Abhishek Nagar from Indore, MP.
                I am a hard-working engneering graduate specialised in Mechanical Engineering from NIT Bhopal.
              </span>
            </Fade>
            <Fade left><span>My field of Interest's are building new Web Technologies and Products and also in areas related to Software Development.</span></Fade>
            <Fade left><span>Whenever possible, I also apply my passion for developing products with Node.js and Modern Javascript Library and Framework like React.js.</span></Fade>
          </div>
          <div className='about-img'>
            <Fade right>
              <img src={aboutimage} alt='' />
            </Fade>
          </div>
        </div>
      </div>
      <div className='connect'>
        <Fade bottom>
          <div className='find'>Find me on</div>
          <div className='feelfree'>Feel free to <span>connect</span> with me</div>
          <div className='left-4'>
            <Link className='link' to='https://www.linkedin.com/in/abhishek-nagar-5353971ba/'><LinkedInIcon className='account1' /></Link>
            <Link className='link' to='https://github.com/Officialabhishek'><TwitterIcon className='account2' /></Link>
            <Link className='link' to='https://github.com/Officialabhishek'><GitHubIcon className='account3' /></Link>
            <Link className='link' to='https://github.com/Officialabhishek'><InstagramIcon className='account4' /></Link>
          </div>
        </Fade>
      </div>

    </div>
  )
}

export default Main;