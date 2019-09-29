import React from 'react';
import ReactDOM from 'react-dom';
import './styles/workitem.scss';
import '../node_modules/aos/src/sass/aos.scss'; 
import AOS from 'aos';

export default class WorkItem extends React.Component {
    componentDidMount(){
        AOS.init();
    }
    componentWillReceiveProps (){ 
        AOS.refresh(); 
    } 
    render() {
        return(
        <div data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine" id="work-item">
            <div id = "work-img">
                <img src={this.props.imgsrc}/>
            </div>
            <div>
                <h1>{this.props.company}</h1>
                <h2>{this.props.position} ({this.props.dates})</h2>
                <ul>
                {this.props.descrip.map((value, index) => {
                    return <li key={index}>{value}</li>
                })}
                </ul>
            </div>
        </div>
        );
    }
}
