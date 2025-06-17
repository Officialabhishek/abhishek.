import React from 'react';
import "./LandingPage.scss";

import image from "../../assets/Profile2025.png";
import { Link } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';

const LandingPage = () => {
  return (
    <div className='landing-page'>
    <Zoom>
      <div className='wrapper'>
        <div className='left'>
          <div className='left-1'>Hi There! <div className='wave'>👋</div></div>
          <div className='left-1'>I'm Abhishek <span>Nagar</span></div>
          {/* <div className='left-3'>I'm into Frontend Development</div> */}
          {/* <div className='left-4'>
            <Link className='link' to='https://www.linkedin.com/in/abhishek-nagar-5353971ba/'><LinkedInIcon className='account1' /></Link>
            <Link className='link' to='https://github.com/Officialabhishek'><GitHubIcon className='account2' /></Link>
          </div> */}
          <div className='left-5'>
            <Link className='about-me' to='/projects'>Projects</Link>
          </div>
        </div>
        <div className='right'>
          <img src={image} alt='' />
        </div>
      </div>
      </Zoom>
    </div>
  )
}

export default LandingPage;