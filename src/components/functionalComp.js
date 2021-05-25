import React from 'react';

export default function FunComp(props){
    const red =() => {
        alert("red func called");
    }

    return (
        <div>
            <p onClick={red}>{props.text}</p>
        </div>
    )
}