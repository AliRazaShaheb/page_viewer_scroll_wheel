import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const increment = () => setCounter((prev) => prev++);
  const decrement = () =>
    setCounter((prev) => {
      if (prev === 0) return 0;
      return prev--;
    });
  return (
    <div>
      <h1>{counter}</h1>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  );
};

export default Counter;
