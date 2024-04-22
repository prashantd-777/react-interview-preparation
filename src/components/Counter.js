import React, { useState, useRef, useEffect } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    const intervalRef = useRef(null);
  
    useEffect(() => {
      intervalRef.current = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
  
      return () => clearInterval(intervalRef.current);
    }, []);
  
    function handleClick() {
      clearInterval(intervalRef.current);
      setCount(0);
    }
  
    return (
      <div>
        <h1>Count is {count}!</h1>
  
        <button onClick={handleClick}>Stop</button>
      </div>
    );
}

export default Counter;