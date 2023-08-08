import React from 'react';
import "./LandingPage.scss";

import image from "../../assets/profile.png";

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className='landing-page'>
      <div className='wrapper'>
        <div className='left'>
          <div className='left-1'>Hi there,</div>
          <div className='left-1'>I'm Abhishek <span>Nagar</span></div>
          <div className='left-3'>I'm into Frontend Development</div>
          <div className='left-4'>
            <Link className='link' to='https://www.linkedin.com/in/abhishek-nagar-5353971ba/'><LinkedInIcon className='account1' /></Link>
            <Link className='link' to='https://github.com/Officialabhishek'><GitHubIcon className='account2' /></Link>
          </div>
          <div className='left-5'>
            <Link className='about-me' to=''>About Me <ExpandMoreIcon /></Link>
          </div>
        </div>
        <div className='right'>
          <img src={image} alt='' />
        </div>
      </div>
    </div>
  )
}

export default LandingPage;