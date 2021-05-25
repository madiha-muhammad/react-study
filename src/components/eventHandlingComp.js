import React from 'react';

export class EvntHandelComp extends React.Component {
    testFun() {
        alert("check");
    }

    render() {
        return (
            <div>
                <p>check it</p>
                <button onClick={() => { this.testFun() }}>Event Handler btn</button>
            </div>
        )
    }
}

export function EvntHandelFunc() {
    // function testFunc() {
    //     alert("test func");
    // }
    const testFunc=()=>{
        alert("test func");
    }
    return (
        <div>
            <p>check it</p>
            <button onClick={() => { testFunc() }}>Event Handler btn</button>
        </div>
    )
}