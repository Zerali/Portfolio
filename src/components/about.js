import React from 'react';
import { RoundImage } from './round-image';

export default class About extends React.Component {
    render() {
        return (
            <div style={{margin: 15}}>
                <RoundImage picture={this.props.picture}/>
                <h3>Neil CarlinSchauer</h3>
                <p>Full Stack Developer. Improvisor. Video Game Designer. Musician. Creative.</p>
                <a href="https://www.linkedin.com/in/neilcarlinschauer/">LinkedIn</a>
                <a href="https://github.com/Zerali">Github</a>
            </div>
        )
    }
}