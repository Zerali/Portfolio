import React from 'react';
import { RoundImage } from './round-image';

export default class About extends React.Component {
    render() {
        return (
            <div>
                <RoundImage picture={this.props.picture}/>
                <h3>Neil CarlinSchauer</h3>
                <p>Full Stack Developer.</p>
                <a href="https://www.linkedin.com/in/neilcarlinschauer/">LinkedIn</a>
            </div>
        )
    }
}