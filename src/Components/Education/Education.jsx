import React from 'react';
import './Education.scss';

import school from "../../assets/school.jpg";
import college from "../../assets/college.jpeg";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const Education = () => {

    return (
        <div className='education'>
            <Fade top><h1 className='heading'>My <span className='headspan'>Education</span></h1></Fade>
            <div className='wrapper'>
                <Zoom>
                    <div className='college'>
                        <div className='logo'>
                            <img src={college} alt='' />
                        </div>
                        <div className='content'>
                            <h2>Maulana Azad National Institute of Technology</h2>
                            <h3>Bachelor of Technology, Mechanical Engineering</h3>
                            <span>2020 - 2024</span>
                        </div>
                    </div>
                </Zoom>
                <Zoom>
                    <div className='college'>
                        <div className='logo'>
                            <img src={school} alt='' />
                        </div>
                        <div className='content'>
                            <h2>MGM English Medium School</h2>
                            <h3>HSC, CBSE</h3>
                            <span>2017 - 2019</span>
                        </div>
                    </div>
                </Zoom>
            </div>
        </div>
    )
}

export default Education;