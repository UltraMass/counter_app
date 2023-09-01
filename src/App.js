import { useState } from 'react';
import './App.css';

import React from 'react'

const App = () => {
const[count,setCount]=useState(0);

const increment = () => {
  setCount(count + 1000);
};

const decrement = () => {
  setCount(count - 100);
};
const x8 = ()=> {
  setCount(count * 8)
}
const x5 = ()=> {
  setCount(count * 5)
}

const square = ()=> {
  setCount(count ** 2)
}

const x10 = ()=> {
  setCount(count * 10)
}

const reset = () => {
  setCount(0);
};
  return (
    <div className='Counter-app'>

      <h1>A Simple Counter App</h1>
      <div className='Counter-container'>
        <button onClick={decrement}>-</button>
        <span className='Count'>{count}</span>
        <button onClick={increment} >+</button>
        <span className='Count'>
        </span>
        <button onClick={reset}>Reset</button>
        <span className='Count'></span>
        <button onClick={x8}>x8</button>
        <button onClick={x5}>x5</button>
        <button onClick={square}>square 2</button>
        <button onClick={x10}>x10</button>

      </div>
    </div>
  )
}

export default App
