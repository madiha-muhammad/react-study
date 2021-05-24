import React from 'react';


//props in function conponent
export function PropsComp(props)
{
    return(
        <div>
            <h1>{props.text.name}</h1>
            <h4>{props.data}</h4>
        </div>
    )
}

//props in class component
export class PropsCompCLass extends React.Component
{
    render()
    {
        return(
            <div>
                <h5>{this.props.text.name}</h5>
                <h1>{this.props.data}</h1>
            </div>
        )
    }
}