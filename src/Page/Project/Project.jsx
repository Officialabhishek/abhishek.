import React from 'react';
import "./Project.scss";
import ProjectCard from './ProjectCard';

import imgbmi from "../../assets/imgbmi.jpeg";
import imgtodo from "../../assets/imgtodo.jpeg";
import imgcalc from "../../assets/imgcalc.jpeg";

const Project = () => {
    return (
        <div className='project'>
            <h1 className='heading'>My <span className='headspan'>Projects</span></h1>
            <div className='wrapper'>
                <div className='wrap'>
                    <div className='row'>
                        <div className='col'>
                            <ProjectCard 
                                img= {imgtodo}
                                title="TO-DO List"
                                desc="Todo list/addToList is a web app that has the functionality of user register and login with authentication. User can add and delete items from the list."
                                ghlink="https://github.com/Officialabhishek/addtolist"
                                demolink="https://addtolist.onrender.com/"
                            />
                        </div>
                        <div className='col'>
                            <ProjectCard 
                                img= {imgbmi}
                                title="BMI Calculator"
                                desc="A body mass index calculator with a beautiful user interface. One can calculate his/her bmi by submitting his/her height and weight measures."
                                ghlink="https://github.com/Officialabhishek/know-your-BMI"
                                demolink="https://knowurbmi.netlify.app/"
                            />
                        </div>
                        <div className='col'>
                            <ProjectCard 
                                img= {imgcalc}
                                title="Numeric Calculator"
                                desc="A simple calculator with interesting user interface created using html, css and javascript."
                                ghlink="https://github.com/Officialabhishek/simple-calculator"
                                demolink="#"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;