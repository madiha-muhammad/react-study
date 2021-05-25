import React from 'react';

export class StateCompClass extends React.Component
{
    constructor(){
        super();
        this.state={
            text: 'state name',
            color: 'blue',
            count: 0
        }
    }

    updateState(){
        this.setState({
            text: 'name changed',
            color: 'green',
            count: this.state.count+1
        })
    }

    render()
    {
        return(
            <div>
                <p>{this.state.text}</p>
                <p>{this.state.color}</p>
                <p>{this.state.count}</p>
                <button onClick={() => {this.updateState()}}>Update State</button>
            </div>
        )
    }
}