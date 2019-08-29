import React from 'react';
import ReactDOM from 'react-dom';
import './styles/experience.scss';
import sc from './images/strategywork.png';
import ardent from './images/ardentlabs.png';
import kbb from './images/kbb.png';
import stb from './images/stb.png';
import WorkItem from './WorkItem.js';

export default class Experience extends React.Component {
    render() {
        return(
        <div id="experience">
            <div id="work-items">
                <div>
                    <WorkItem imgsrc={sc} position="Part-time Front End Engineer/Designer" dates="January 2019-June 2019" company="Strategy Companion" descrip={["Assisted in enhancing UI to improve efficiency and usability of the application","Developed interactive charts and graphs using D3.js to create user friendly data visualization","Designed mock-ups using Adobe Photoshop for product landing page"]}/>
                    <WorkItem imgsrc={ardent} position="Software Developer Intern" dates="October 2018-December 2018" company="Ardent Academy" descrip={["Used React and GraphQL to implement a web frontend for users to interface with", "Managed and added new features to office application that organizes the academy’s student and classroom information"]}/>
                    <WorkItem imgsrc={kbb} position="Software Engineer Intern" dates="June 2018-September 2018" company="Kelley Blue Book" descrip={["Designed and developed code that handled verification for MyKBB accounts and auto sign ups", "Learned and used Gigya's API to handle account creations, verifications, password resets, emails, etc.","Lived by Agile Scrum principles and collaborated with team members using Agile techniques including test driven development, code reviews, and retrospectives."]}/>
                    <WorkItem imgsrc={stb} position="Software Developer Intern" dates="June 2017-December 2017" company="Super Toy Box" descrip={["Used Unity/C#, PlayCanvas, and A-Frame to create virtual reality components","Replaced assets and converted XML files to JSON files for Subaru and Kia Awards display application","Styled footer and product features/details of the Aggregate Watches website","Fixed bugs and errors of the templates that were uploaded into the VRFactory website"]}/>
                </div>

            </div>
            <div id="experience-section">
                <h2> WORK EXPERIENCE </h2>
            </div>
        </div>
        );
    }
}
