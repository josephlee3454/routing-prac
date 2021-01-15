import React from 'react'

const Color = props => {
    const wordStyle ={
        color:props.id,
        background:props.Id,
    }
    return (
        <div>
            <p style={wordStyle}>this the background {props.id} the text color is {props.Id}</p>
        </div>
    )
}

export default Color
