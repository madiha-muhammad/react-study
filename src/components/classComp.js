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
                <p>CLass Component</p>
            </div>
        )
    }
}

export default ClassComp;