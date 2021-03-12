import React from 'react';
import './Main.css'
import Image from './Images/Background.png'

const Main = () => {
    return (
        <main>
            <div className="bg-success">
                <div className="container">
                    <div className="row">

                        <div className="col-md-6 Left">
                            <p id="Name">Hi, I,m Imtious Islam</p>
                            <p id="Description">I am a Diploma student. Studying in Feni Computer Institute in Bangladesh <br />I am 20 and love to Ride, Sing and Plant trees</p>
                            <button id="Button">IN MY BRAIN</button>

                        </div>

                        <div className="col-md-6 Right">
                            <img id="Hi-Image" src={Image} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Main;