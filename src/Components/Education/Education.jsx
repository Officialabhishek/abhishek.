import React from 'react';
import './Education.scss';

import school from "../../assets/school.jpg";
import college from "../../assets/college.jpeg";

const Education = () => {

    return (
        <div className='education'>
            <h1 className='heading'>My <span className='headspan'>Education</span></h1>
            <div className='wrapper'>
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
            </div>
        </div>
    )
}

export default Education;