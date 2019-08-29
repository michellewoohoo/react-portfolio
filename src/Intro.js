import React from 'react';
import ReactDOM from 'react-dom';
import './styles/intro.scss';
import banner from './images/banner.png';

export default class Intro extends React.Component {
    render() {
        return(
        <div id="intro">
            <center>
            <h2>HI THERE, I'M</h2>
            <div className="typewriter">
            <h1> MICHELLE WOO </h1>
            </div>
            <p> SOFTWARE ENGINEER </p>
            <div id="img-div">
                <p>GRAPHIC DESIGNER</p>
                <img src={banner} />
                <p>COFFEE ENTHUSIAST</p>
            </div>
            </center>

        </div>
        );
    }
}
