import React from 'react';
import "./Project.scss";

import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Link } from 'react-router-dom';

const ProjectCard = (props) => {
  return (
    <div className='card'>
        <div className='img'>
            <img src={props.img} alt='' />
        </div>
        <div className='content'>
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
            <div className='links'>
                <Link className='link' to={props.ghlink}><GitHubIcon /> Github</Link> 
                <Link className='link' to={props.demolink}><OpenInNewIcon /> Demo</Link> 
            </div>
        </div>
    </div>
  )
}

export default ProjectCard;