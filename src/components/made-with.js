import React from 'react'
import { Row, Col } from 'react-bootstrap'
import './made-with.css'

import reactLogo from '../resource/svg/react.svg'
import bootstrapLogo from '../resource/svg/bootstrap.svg'
import nodeLogo from '../resource/svg/nodejs.svg'

const boxStyle = {
    maxWidth: 100,
    minWidth: 100,
    maxHeight: 100,
    minHeight: 100,
    margin: 30,
    display: 'inline-block'
}

export default () => {
    return (
        <div>
            <h3>Technologies Made With</h3>
            <div>
                <div style={boxStyle}>
                    <img style={{maxWidth: '110%', maxHeight: '110%', paddingTop: 5, paddingBottom: 5  }} src={reactLogo} alt="React logo"/>
                </div>
                <div style={boxStyle}>
                    <img style={{maxWidth: '95%', maxHeight: '95%'}} src={bootstrapLogo} alt="Bootstrap logo"/>
                </div>
                <div style={boxStyle}>
                    <img style={{maxWidth: '90%', maxHeight: '90%'}} src={nodeLogo} alt="Node logo"/>
                </div>
            </div>
        </div>
    )
}