import React from 'react'

export const RoundImage = (props) => {
    return (
        <img
          alt="Neil CarlinSchauer"
          src={props.picture}
          style={{
            borderWidth:1,
            borderColor:'rgba(0,0,0,0.2)',
            alignItems:'center',
            justifyContent:'center',
            width:200,
            height:200,
            backgroundColor:'#fff',
            borderRadius:100,
          }}
        />
    )
}