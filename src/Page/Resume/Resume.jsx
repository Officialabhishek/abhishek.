import React from 'react';
import "./Resume.scss";
import { Link } from 'react-router-dom';

import image from "../../assets/resume.jpg"

import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
const Resume = () => {
  return (
    <div className='resume' id='resume'>
      <div className='resumebox'>
        <Link className='resumelink' to='https://drive.google.com/file/d/1cMDpDy168L8h0mpESBu3L2rJyQx1ePa4/view?usp=sharing'><CloudDownloadIcon />Download</Link>
      </div>
      <div className='img'>
        <img src={image} alt='' />
      </div>
      <div className='resumebox'>
        <Link className='resumelink' to='https://drive.google.com/file/d/1cMDpDy168L8h0mpESBu3L2rJyQx1ePa4/view?usp=sharing'><CloudDownloadIcon />Download</Link>
      </div>    </div>
  )
}

export default Resume;