import React from 'react';
import "./Skill.scss";

import Fade from 'react-reveal/Fade';

import { TbBrandCpp, TbBrandVscode } from "react-icons/tb";
import { FaReact, FaNodeJs, FaHtml5, FaSass, FaGitAlt, FaGithub, FaFigma, FaBootstrap } from "react-icons/fa";
import { SiMongodb, SiJavascript, SiCss3, SiPostman } from "react-icons/si";

const Skill = () => {
    return (
        <div className='skill'>
            <Fade top><h1 className='heading'>My <span className='headspan'>skillset</span></h1></Fade>
            {/* <span>Here some of the tools and technologies that I'm using.</span> */}
            <div className='wrapper'>
                <Fade>
                    <div className='table'>
                        <div className='row'>
                            <div className='col'><TbBrandCpp /> </div>
                            <div className='col'><FaHtml5 /> </div>
                            <div className='col'><SiCss3 /> </div>
                            <div className='col'><SiJavascript /> </div>
                            <div className='col'><FaReact /> </div>
                        </div>
                        <div className='row'>
                            <div className='col'><FaNodeJs /> </div>
                            <div className='col'><FaGitAlt /> </div>
                            <div className='col'><FaGithub /> </div>
                            <div className='col'><FaSass /> </div>
                            <div className='col'><FaBootstrap /> </div>
                        </div>
                        <div className='row'>
                            <div className='col'><TbBrandVscode /> </div>
                            <div className='col'><FaHtml5 /> </div>
                            <div className='col'><SiMongodb /> </div>
                            <div className='col'><FaFigma /> </div>
                            <div className='col'><SiPostman /> </div>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default Skill;