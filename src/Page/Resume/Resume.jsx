import React from 'react';
import "./Resume.scss";
import { Link } from 'react-router-dom';

import image from "../../assets/resume2025.jpg"

import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
const Resume = () => {
  return (
    <div className='resume' id='resume'>
      <div className='resumebox'>
        <Link className='resumelink' to='https://drive.google.com/file/d/1zEZ3_NexkxTBSFxBaxJFsohv1oZPL2N7/view?usp=drivesdk'><CloudDownloadIcon />Download</Link>
      </div>
      <div className='img'>
        <img src={image} alt='' />
      </div>
      <div className='resumebox'>
        <Link className='resumelink' to='https://drive.google.com/file/d/1zEZ3_NexkxTBSFxBaxJFsohv1oZPL2N7/view?usp=drivesdk'><CloudDownloadIcon />Download</Link>
      </div>    </div>
  )
}

export default Resume;