import React, { useState } from "react";

function CounterHook() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ margin: "20px", padding: "10px", border: "1px solid black" }}>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: "10px" }}>
        Decrement
      </button>
    </div>
  );
}

export default CounterHook;
