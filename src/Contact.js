import React from 'react';
import ReactDOM from 'react-dom';
import './styles/contact.scss';
import curly_right from './images/curly_right.png';
import github from './images/github.png';
import linkedin from './images/linkedin.png';
import '../node_modules/aos/src/sass/aos.scss'; 
import AOS from 'aos';

export default class Contact extends React.Component {
    componentDidMount(){
        AOS.init();
    }
    componentWillReceiveProps (){ 
        AOS.refresh(); 
    }
    render() {
        return(
        <div  id="contact"> 
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
            <div>
                <img id="curly" src={curly_right}/>
            </div>
            <div id="contact-section">
                <h2>LETS CONNECT</h2>
            </div> 
        </div>
        );
    }
}
