import React, { useState } from 'react';
import Parent from './Components/Parent';
import './App.css';
import Context from './Context/Context';


function App() {
  let count = useState(0);

  return (
    <Context.Provider value={count}>
      <div className="App">
        <Parent />


      </div>
    </Context.Provider>
  );
}

export default App;
