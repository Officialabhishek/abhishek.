import React from 'react';
import "./Navbar.scss";

import { Link } from 'react-router-dom';
import {FaRegStar} from "react-icons/fa";
import {HiMenuAlt1} from "react-icons/hi";
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import DescriptionIcon from '@mui/icons-material/Description';

const Navbar = () => {
  function handleClick() {
    const nav = document.getElementById("links");
    nav.className === "links" ? nav.className = nav.className + " toggle" : nav.className = "links";
  }


  return (
    <div className='navbar' id='navbar'>
      <div className='title'>abhishek.</div>
      <div className='links' id='links'>
          <div className='link'> <Link className='llink' to='/'><HomeIcon /> Home</Link> </div>
          <div className='link'> <Link className='llink' to='/about'><PersonIcon /> About</Link> </div>
          <div className='link'> <Link className='llink' to='/projects'><LiveTvIcon /> Projects</Link> </div>
          <div className='link'> <Link className='llink' to='/resume'><DescriptionIcon /> Resume</Link> </div>
          <div className='left-5'>
            <Link className='about-me' to='https://github.com/Officialabhishek/abhishek.'><FaRegStar /></Link>
          </div>
          <div className='toggle-icon' onClick={handleClick}><HiMenuAlt1 /></div>
      </div>
    </div>
  )
}

export default Navbar;