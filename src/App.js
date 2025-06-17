import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import Main from "./Page/Main/Main";
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
// import About from './Page/About/About';
import Project from './Page/Project/Project';
import Resume from './Page/Resume/Resume';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/projects" element={<Project />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<Main />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}


export default App;