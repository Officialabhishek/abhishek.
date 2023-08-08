import React from 'react';
import "./Main.scss";

import LandingPage from '../../Components/LandingPage/LandingPage';
import Aboutme from '../../Components/AboutMe/Aboutme';

const Main = () => {
  return (
    <div className='main'>
      <LandingPage />
      <hr className='line'></hr>
      <Aboutme />
    </div>
  )
}

export default Main;