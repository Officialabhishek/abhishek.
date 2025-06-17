import React, { useState } from 'react';
import "./Navbar.scss";

import { Link } from 'react-router-dom';
import {FaRegStar} from "react-icons/fa";
import {HiMenuAlt1} from "react-icons/hi";
import HomeIcon from '@mui/icons-material/Home';
// import PersonIcon from '@mui/icons-material/Person';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import DescriptionIcon from '@mui/icons-material/Description';

const Navbar = () => {
  const [hideMenu, setHideMenu] = useState(false);

  return (
    <div className="navbar" id='navbar'>
      <div className='title'>abhishek.</div>
      <div className='toggle-icon' onClick={() => setHideMenu(!hideMenu)}><HiMenuAlt1 /></div>
      <div className={hideMenu ? 'links toggle' : 'links'} id='links'>
          <div className='link'> <Link className='llink' to='/' onClick={() => setHideMenu(false)}><HomeIcon /> Home</Link> </div>
          {/* <div className='link'> <Link className='llink' to='/about' onClick={() => setHideMenu(false)}><PersonIcon /> About</Link> </div> */}
          <div className='link'> <Link className='llink' to='/projects' onClick={() => setHideMenu(false)}><LiveTvIcon /> Projects</Link> </div>
          <div className='link'> <Link className='llink' to='/resume' onClick={() => setHideMenu(false)}><DescriptionIcon /> Resume</Link> </div>
          <div className='left-5'>
            <Link className='about-me' to='https://github.com/Officialabhishek/abhishek.'><FaRegStar /></Link>
          </div>
      </div>
    </div>
  )
}

export default Navbar;