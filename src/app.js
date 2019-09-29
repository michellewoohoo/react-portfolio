import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';

import Intro from './Intro.js';
import About from './About.js';
import Skills from './Skills.js';
import Experience from './Experience.js';
import Contact from './Contact.js';
class App extends React.Component {
    render() { 
        return(
            <div>              
                <Intro />
                <About/>
                <Experience/>
                <Skills/>
                <Contact/>
                <footer>Graphics Designed and Website Built by Michelle Woo </footer>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById("app"));

