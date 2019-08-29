import React from 'react';
import ReactDOM from 'react-dom';
import './styles/about.scss';
import shell from './images/shell.png';
import curly_right from './images/curly_right.png'

export default class About extends React.Component {
    render() {
        return(
        <div id="about">
            <div>
                <div>
                    <h3>
                    HI THERE. MY NAME IS MICHELLE AND I GRADUATED <span>UNIVERSITY OF CALIFORNIA, IRVINE </span>IN 2019 WITH A <span>COMPUTER SCIENCE</span> DEGREE. I LOVE PROGRAMMING AND AM EXCITED TO GAIN MORE KNOWLEDGE IN THE FIELD OF COMPUTER SCIENCE. I AM PASSIONATE ABOUT <span>LEARNING NEW THINGS</span> AND I STRIVE TO <span>IMPROVE AND EXPAND MY SKILL SET.</span> I HOPE TO PURSUE A CAREER IN <span>WEB DEVELOPMENT, GAME DEVELOPMENT, OR UI/UX DESIGN </span>. MY HOBBIES INCLUDE PLAYING VIDEO GAMES, SPENDING TIME WITH PEOPLE, DRAWING, AND STUDYING AT COFFEE SHOPS.
                    </h3>
                </div>

            </div>
            <div>
                <img id="curly" src={curly_right}/>
            </div>
            <div id="about-section">
                <img id="shell" src={shell}/>
                <h2> ABOUT ME </h2>
            </div>
        </div>
        );
    }
}
