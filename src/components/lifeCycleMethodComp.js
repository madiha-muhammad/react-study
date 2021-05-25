import React from 'react';

export class LifeCycyleComp extends React.Component
{
    constructor(){
        super();
        console.warn("constructor");
    }

    componentDidMount(){
        console.warn("component Did Mount");
    }
    render()
    {
        console.log("render");
        return(
            <div>

            </div>
        )
    }
}