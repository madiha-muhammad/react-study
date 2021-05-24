import React from 'react';

class ClassComp extends React.Component {
    constructor() {
        super()
    }

    //lifecycle methods
    componentDidMount() {
        console.warn("called life cycle");
    }

    render() {
        return (
            <div>
                <h1>CLass Component</h1>
            </div>
        )
    }
}

export default ClassComp;