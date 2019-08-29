import React from 'react';
import ReactDOM from 'react-dom';
import './styles/contact.scss';
import curly_left from './images/curly_left.png';
import github from './images/github.png';
import linkedin from './images/linkedin.png';

export default class Contact extends React.Component {
    render() {
        return(
        <div id="contact"> 
            <div id="contact-section">
                <h2>LETS CONNECT</h2>
            </div>  
            <div>
                <img id="curly" src={curly_left}/>
            </div>
            <div id="contact-info">
             <h3>michelleymwoo@gmail.com</h3>
             <div id="icons">
                <a href={"https://github.com/michellewoohoo"}> 
                <img src={github}/>
                </a>
                <a href={"https://www.linkedin.com/in/michelle-woo-a71a41129"}> 
                <img  src={linkedin}/>
                </a>
            </div>
            </div>
        </div>
        );
    }
}
