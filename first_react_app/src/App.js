import React, { Component } from 'react';
import Parent from './Components/Parent';
import './App.css';
import Context from './Context/Context';
import Child from './Components/Child';

function App() {

  return (
    <Context.Provider value="Sheroz">
      <div className="App">
        <Parent />
        <Child />

      </div>
    </Context.Provider>
  );
}

export default App;
