import React from 'react';
import './App.css';
import ClassComp from './components/classComp';
import FunComp from './components/functionalComp';
import { PropsComp, PropsCompCLass } from './components/propsComp';
import { StateCompClass } from './components/stateComp';
import HideSeek from './components/hide&SeekComp';
import { EvntHandelFunc, EvntHandelComp } from './components/eventHandlingComp';
import { LifeCycyleComp } from './components/lifeCycleMethodComp';

function App() {
  return (
    <div className="App">
      <ClassComp/>
      <FunComp text="Functional Component Called on Click"/>
      <PropsComp text={{name: 'madiha'}} data="Props in functionalComponent"/>
      <PropsCompCLass text={{name: 'madiha'}} data="Props in classComponent"/>
      <StateCompClass/>
      <HideSeek/>
      <EvntHandelComp/>
      <EvntHandelFunc/>
      <LifeCycyleComp/>
    </div>
  );
}

export default App;
