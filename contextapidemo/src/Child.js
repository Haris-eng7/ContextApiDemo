import React, { useContext } from "react";
import CounterContext from "./CounterContext";

const Child = () => {
  let countervalue = useContext(CounterContext);
  console.log(countervalue);
  return (
    <div>
      <h2>This is first child</h2>
      <h3>The value is {countervalue[0]}</h3>

      <button
        onClick={() => {
          countervalue[1](++countervalue[0]);
        }}
      >
        Count ++
      </button>
    </div>
  );
};

export default Child;
