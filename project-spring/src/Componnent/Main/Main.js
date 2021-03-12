import React from 'react';
import './Main.css'
import Image1 from './Images/Background.png'
import Image2 from './Images/Group 33086.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';


const Main = () => {
    return (
        <main>
            <section className="bg-success">
                <div className="container pb-5">
                    <div className="row">
                        <div className="col-md-6 Left">
                            <p className="Title">Hi, I,m Imtious Islam</p>
                            <p className="Description">I am a Diploma student. Studying in Feni Computer Institute in Bangladesh <br />I am 20 and love to Ride, Sing and Plant trees</p>
                            <button id="Button">IN MY BRAIN</button>
                        </div>
                        <div className="col-md-6 mt-5">
                            <img id="Hi-Image" src={Image1} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-danger">
            <div className="container pb-5">
                    <div className="row">
                        <div className="col-md-6 mt-5">
                            <img id="Experience-Image" src={Image2} alt=""/>
                        </div>
                        <div className="col-md-6 Experience-Right">
                            <p className="Title">Experience</p>
                            <p className="Description">Here are some examples site that I have developed, just hit the PROJECTS<br/> Hit CV to get more details</p>
                            <button id="Project">PROJECTS</button>
                            <button id="CV">CV</button>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="bg-dark">
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-md-4">
                            <p id="Social">Say Hello</p>
                        <a href="#" ><FontAwesomeIcon id="Social-Icon1" icon={faFacebook} /></a>
                        <a href="#" ><FontAwesomeIcon id="Social-Icon2" icon={faGithub} /></a>
                        <a href="#" ><FontAwesomeIcon id="Social-Icon3" icon={faLinkedin} /></a>
                        </div>
                        <div className="col-md-4"></div>
                        <div className="col-md-4 d-flex align-items-center text-white">
                            <p>© All rights reserved by AS</p>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
};

export default Main;