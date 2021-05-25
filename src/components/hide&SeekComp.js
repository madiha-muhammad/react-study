import React from 'react';

export default class HideSeek extends React.Component {
    constructor() {
        super();
        this.state = {
            show: true
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.show ?
                        <p>Hide n Seek</p> :
                        null
                }
                <button onClick={() => {this.setState({show:!this.state.show})}}>Hide n Seek</button>
            </div>
        )
    }
}