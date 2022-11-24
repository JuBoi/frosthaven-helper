import React from 'react';
import logo from './logo.svg';
import lootJson from './data/loot.json';
import './App.css';


import Button from '@mui/material/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

              <Button variant="contained">{test()}</Button>
      </header>
    </div>
  );
}

function test() : number {
    const deck = lootJson['deck'];
    return deck['money_1']['startId']
}

export default App;
