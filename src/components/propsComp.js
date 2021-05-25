import React from 'react';


//props in function conponent
export function PropsComp(props)
{
    return(
        <div>
            <p>{props.text.name}</p>
            <p>{props.data}</p>
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
                <p>{this.props.text.name}</p>
                <p>{this.props.data}</p>
            </div>
        )
    }
}