import React from 'react';
import "./Project.scss";
import ProjectCard from './ProjectCard';
import Fade from 'react-reveal/Fade';

import imgbmi from "../../assets/imgbmi.jpeg";
import imgtodo from "../../assets/imgtodo.jpeg";
import imgcalc from "../../assets/imgcalc.jpeg";
import abhishek from "../../assets/abhishek.jpeg";
import kapde from "../../assets/kapde.jpeg";

const Project = () => {
    return (
        <div className='project'>
            <Fade top><h1 className='heading'>My <span className='headspan'>Projects</span></h1></Fade>
            <div className='wrapper'>
                <div className='row'>
                    <div className='col'>
                        <ProjectCard
                            img={kapde}
                            title="Kapde (E-Commerce Website)"
                            desc="Kapde is a MERN e-commerce website. Backend part is not done yet. Soon available for demo"
                            ghlink="https://github.com/Officialabhishek/e-comm"
                            demolink="#"
                        />
                    </div>
                    <div className='col'>
                        <ProjectCard
                            img={abhishek}
                            title="abhishek."
                            desc="abhishek. is my self coded personal portfolio website build using Reactjs and sass is used for styling. It is fully responsive in nature."
                            ghlink="https://github.com/Officialabhishek/abhishek."
                            demolink="https://abhisheknagar.vercel.app/"
                        />
                    </div>
                    <div className='col'>
                        <ProjectCard
                            img={imgtodo}
                            title="TO-DO List"
                            desc="Todo list/addToList is a web app that has the functionality of user register and login with authentication. User can add and delete items from the list."
                            ghlink="https://github.com/Officialabhishek/addtolist"
                            demolink="https://addtolist.onrender.com/"
                        />
                    </div>
                    <div className='col'>
                        <ProjectCard
                            img={imgbmi}
                            title="BMI Calculator"
                            desc="A body mass index calculator with a beautiful user interface. One can calculate his/her bmi by submitting his/her height and weight measures."
                            ghlink="https://github.com/Officialabhishek/know-your-BMI"
                            demolink="https://knowurbmi.netlify.app/"
                        />
                    </div>
                    <div className='col'>
                        <ProjectCard
                            img={imgcalc}
                            title="Numeric Calculator"
                            desc="A simple calculator with interesting user interface created using html, css and javascript."
                            ghlink="https://github.com/Officialabhishek/simple-calculator"
                            demolink="#"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;