import React from 'react';
import ReactDOM from 'react-dom';
import './styles/skills.scss';
import laptop from './images/laptop.png';
import curly_left from './images/curly_left.png'
import '../node_modules/aos/src/sass/aos.scss'; 
import AOS from 'aos';

export default class Skills extends React.Component {
      componentDidMount(){
        AOS.init();
    }
    componentWillReceiveProps (){ 
        AOS.refresh(); 
    }
    render() {
        return(
        <div id="skills"> 
            <div id="skills-section">
                <img id="laptop" src={laptop}/>
                <h2>SKILLS</h2>
            </div>  
            <div>
                <img id="curly" src={curly_left}/>
            </div>
            <div>
                <div data-aos="zoom-in" id="skills-set">
                    <p>
                        
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>JAVASCRIPT</span>
                        <span>REACT.JS</span> 
                        <span>BOOTSTRAP</span>
                        <span>C#</span>
                        <span>JAVA</span> 
                        <span>PYTHON</span> 
                        <span>C++</span>
                        <span>.NET CORE</span>
                        <span>D3.JS</span>
                        <span>UNITY</span>
                        <span>SQL</span>
                        <span>NODE.JS</span>
                        <span>GRAPHQL</span>
                        <span>ADOBE PHOTOSHOP</span>
                        
                    </p>  
                </div>
            </div>
        </div>
        );
    }
}
