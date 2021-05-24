import React from 'react';

export default function FunComp(props){
    const red =() => {
        alert("red func called");
    }

    return (
        <div>
            <h1 onClick={red}>{props.text}</h1>
        </div>
    )
}