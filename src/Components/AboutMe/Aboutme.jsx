import React from 'react';
import "./Aboutme.scss";
import { Link } from 'react-router-dom';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import aboutImg from "../../assets/aboutImg.png";

const Aboutme = () => {
    return (
        <div className='aboutme'>
            <h1>About Me</h1>
            <div className='wrapper'>
                <div className='about-img'>
                    <img src={aboutImg} alt='' />
                </div>
                <div className='about-content'>
                    <h2>I'm Abhishek</h2>
                    <h3>Tech Enthusiast</h3>
                    <p>
                        I am an explorer and a tech enthusiast who loves to
                        learn and collaborate. Currently, I'm doing my undergraduate Bachelor of Technology
                        degree in Mechanical Engineering from National Institute of Technology Bhopal (NIT-B) 2020-2024.
                        I am very passionate about improving my coding skills & developing creative websites.
                    </p>
                    <p><span>Email</span> : abhisheknagar0110@gmail.com</p>
                    <p><span>Place</span> : Bhopal, Madhya Pradesh</p>
                    <div className='resume'>
                        <Link className='resumelink' to=''>Resume <KeyboardArrowRightIcon /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutme;