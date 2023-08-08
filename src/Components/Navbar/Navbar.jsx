import React from 'react';
import "./Navbar.scss";

import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='title'>abhishek.</div>
      <div className='links'>
          <div className='link'> <Link className='llink' to='/'><HomeIcon /> Home</Link> </div>
          <div className='link'> <Link className='llink' to='/about'><PersonIcon /> About</Link> </div>
          <div className='link'> <Link className='llink' to='/projects'><LiveTvIcon /> Projects</Link> </div>
          <div className='link'> <Link className='llink' to='/resume'><DocumentScannerIcon /> Resume</Link> </div>
      </div>
    </div>
  )
}

export default Navbar;