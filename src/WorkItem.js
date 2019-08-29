import React from 'react';
import ReactDOM from 'react-dom';
import './styles/workitem.scss';


export default class WorkItem extends React.Component {
    render() {
        return(
        <div id="work-item">
            <div>
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
