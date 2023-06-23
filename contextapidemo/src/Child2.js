import React, { useReducer } from "react";
import CounterReducer from "./CounterReducer";

const Child2 = () => {
  let state = useReducer(CounterReducer, 10);
  return (
    <div>
      <span>Counter: {state[0]}</span>

      <button onClick={() => state[1]("INCREMENT")}>+</button>
      <button onClick={() => state[1]("DECREMENT")}>-</button>
    </div>
  );
};

export default Child2;
