import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.scss";

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='wrapper'>
        <div className='love'>Designed and Developed with ❤️ by <span>Abhishek Nagar</span>.</div>
        <div className='footer-title'>Copyright © 2023 <span>abhishek.</span> </div>
        <div className='social-links'>
          <Link className='link' to='https://www.linkedin.com/in/abhishek-nagar-5353971ba/'><LinkedInIcon /></Link>
          <Link className='link' to='https://github.com/Officialabhishek'><GitHubIcon /></Link>
          <Link className='link' to='https://instagram.com/abhisheknagar0110'><InstagramIcon /></Link>
          <Link className='link' to='https://twitter.com/abhishek__0110'><TwitterIcon /></Link>
          <Link className='link' to='mailto:abhisheknagar0110@gamil.com'><MailOutlineIcon /></Link>
          <Link className='link' to='https://t.me/abhisheknagar0110'><TelegramIcon /></Link>
        </div>
      </div>
    </div>
  )
}

export default Footer;