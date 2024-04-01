import React, { useState } from 'react';
import './Counter.css'

function Counter() {
  let [count, setCount] = useState(0);

  function increment() {
    setCount(count++);
  }

  function decrement() {
    setCount(count--);
  }

  return (
    <div className='container'>
      <div className="counterBox">
        <p>{count}</p>
        <div className="buttons">
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
        </div>
      </div>
    </div>
  );
}

export default Counter;