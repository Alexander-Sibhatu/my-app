import React, {useState} from 'react'

const Counter = () => {

    const [count, setCount] = useState(0);


    const handleIncrement = () => {
        setCount(count => count + 1);
    };
    const handleDecrement = () => {
        setCount(count => count - 1);
    };
  return (
    <div>
      <h1>Count: {count}</h1>
      <button className="btn" onClick={handleIncrement}>+</button>
      <button className="btn" onClick={handleDecrement}>-</button>
    </div>
  )
}

export default Counter