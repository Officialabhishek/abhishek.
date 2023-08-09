import React from 'react';
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
          <div className='link'><LinkedInIcon /></div>
          <div className='link'><GitHubIcon /></div>
          <div className='link'><InstagramIcon /></div>
          <div className='link'><TwitterIcon /></div>
          <div className='link'><MailOutlineIcon /></div>
          <div className='link'><TelegramIcon /></div>
        </div>
      </div>
    </div>
  )
}

export default Footer;