import React from 'react';
import ReactDOM from 'react-dom';
import './styles/about.scss';
import shell from './images/shell.png';
import curly_left from './images/curly_left.png'
import '../node_modules/aos/src/sass/aos.scss'; 
import AOS from 'aos';

export default class About extends React.Component {
    componentDidMount(){
        AOS.init();
    }
    componentWillReceiveProps (){ 
        AOS.refresh(); 
    }
    render() {
        return(
        <div data-aos="fade-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine" id="about">
           <div id="about-section">
                <img id="shell" src={shell}/>
                <h2> ABOUT ME </h2>
            </div>
            <div>
                <img id="curly" src={curly_left}/>
            </div>
            <div>
                <div>
                    <h3>
                    MY NAME IS MICHELLE AND I GRADUATED FROM <span>UNIVERSITY OF CALIFORNIA, IRVINE </span>IN 2019 WITH A <span>COMPUTER SCIENCE</span> DEGREE. I LOVE PROGRAMMING AND AM EXCITED TO GAIN MORE KNOWLEDGE IN THE FIELD OF COMPUTER SCIENCE. I AM PASSIONATE ABOUT <span>LEARNING NEW THINGS</span> AND I STRIVE TO <span>IMPROVE AND EXPAND MY SKILL SET.</span> I HOPE TO PURSUE A CAREER IN <span>WEB DEVELOPMENT, GAME DEVELOPMENT, OR UI/UX DESIGN </span>. MY HOBBIES INCLUDE PLAYING VIDEO GAMES, SPENDING TIME WITH PEOPLE, DRAWING, AND STUDYING AT COFFEE SHOPS.
                    </h3>
                </div>
            </div>  
        </div>
        );
    }
}
