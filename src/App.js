import React from 'react';
import './App.css';
import Burger from './components/Burger/Burger';
import Total from './components/Total/Total';

export default function App() {
  return (
    <div className='App'>
      <div className='App-Container'>
        <div className='App-Title'>
          <h1>Burger Ordering Application</h1>
        </div>
        <div className='App-Burger'>
          <Burger />
        </div>
        <div className='App-Total'>
          <Total />
        </div>
      </div>
    </div>
  );
}
