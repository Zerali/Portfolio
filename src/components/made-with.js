import React from 'react'
import { Row, Col } from 'react-bootstrap'
import './made-with.css'

const boxStyle = {
    width: 100,
    height: 100,
    background: '#9ca1a8',
    margin: 15,
    display: 'inline-block'
}

export default () => {
    return (
        <div>
            <h3>Technologies Made With</h3>
            <div>
                <div style={boxStyle}>React</div>
                <div style={boxStyle}>Bootstrap</div>
                <div style={boxStyle}>Node</div>
            </div>
        </div>
    )
}