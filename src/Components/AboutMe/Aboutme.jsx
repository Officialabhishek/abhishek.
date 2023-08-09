import React from 'react';
import "./Aboutme.scss";
import { Link } from 'react-router-dom';
import aboutImg from "../../assets/aboutImg.png";

const Aboutme = () => {
    return (
        <div className='aboutme'>
            <h1 className='heading'>Know who <span className='headspan'>i'm</span></h1>
            <div className='wrapper'>
                <div className='about-img'>
                    <img src={aboutImg} alt='' />
                </div>
                <div className='about-content'>
                    <div className='one'>I'm Abhishek</div>
                    <div className='two'>Tech Enthusiast</div>
                    <div className='three'>
                        I am an explorer and a tech enthusiast who loves to
                        learn and collaborate. Currently, I'm doing my undergraduate Bachelor of Technology
                        degree in Mechanical Engineering from National Institute of Technology Bhopal (NIT-B) 2020-2024.
                        I am very passionate about improving my coding skills & developing creative websites.
                    </div>
                    <div className='three'>I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</div>
                    <div className='five'><span>Email</span> : <Link className='mail' to="mailto:abhisheknagar0110@gmail.com">abhisheknagar0110@gmail.com</Link></div>
                    <div className='six'><span>Place</span> : Bhopal, Madhya Pradesh</div>
                </div>
            </div>
        </div>
    )
}

export default Aboutme;