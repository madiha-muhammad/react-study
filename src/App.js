import React from 'react';
import './App.css';
import ClassComp from './components/classComp';
import FunComp from './components/functionalComp';
import { PropsComp } from './components/propsComp';
import { PropsCompCLass } from './components/propsComp';
import { StateCompClass } from './components/stateComp';

function App() {
  return (
    <div className="App">
      <ClassComp></ClassComp>
      <FunComp text="Functional Component Called on Click"></FunComp>
      <PropsComp text={{name: 'madiha'}} data="Props in functionalComponent"></PropsComp>
      <PropsCompCLass text={{name: 'madiha'}} data="Props in classComponent"></PropsCompCLass>
      <StateCompClass></StateCompClass>
    </div>
  );
}

export default App;
