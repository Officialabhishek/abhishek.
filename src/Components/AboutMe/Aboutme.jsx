import React from 'react';
import "./Aboutme.scss";
import { Link } from 'react-router-dom';
import aboutImg from "../../assets/hero2.png";
import Fade from 'react-reveal/Fade';

const Aboutme = () => {
    return (
        <div className='aboutme'>
            <Fade top><h1 className='heading'>Know who <span className='headspan'>i'm</span></h1></Fade>
            <div className='wrapper'>
                <div className='about-img'>
                    <Fade left><img src={aboutImg} alt='' /></Fade>
                </div>
                <div className='about-content'>
                    <Fade right><div className='one'>I'm Abhishek</div>
                    <div className='two'>Data Strategist</div>
                    <div className='three'>
                        I'm a techno-commercial procurement professional with a passion for using data to drive smarter business decisions. I have completed my Bachelor of Technology
                        degree in Mechanical Engineering from <span>National Institute of Technology Bhopal</span> (NIT-B) 2020-2024.
                        Currently, I'm working as an Assistant Manager @ JSW Steel Raigarh.
                    </div>
                    <div className='three'>At JSW, I manage end-to-end procurement from Bulk raw material sourcing to CAPEX/OPEX project handling. I focus on aligning technical feasibility with commercial efficiency, ensuring every purchase adds value not just cost. I'm always looking for environments where I can contribute, learn, and grow - surrounded by smart people solving real-world problems in supply chain, data, or tech.</div>
                    <div className='five'><span>Email</span> : <Link className='mail' to="mailto:abhisheknagar0110@gmail.com">abhisheknagar0110@gmail.com</Link></div>
                    <div className='six'><span>Place</span> : Raigarh, Chhattisgarh</div></Fade>
                </div>
            </div>
        </div>
    )
}

export default Aboutme;
