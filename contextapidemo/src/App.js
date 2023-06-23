import logo from "./logo.svg";
import "./App.css";
import Parent from "./Parent";
import CounterContext from "./CounterContext";
import { useState } from "react";

function App() {
  let countState = useState(20);
  return (
    <CounterContext.Provider value={countState}>
      <div className="App">
        <Parent name="Haris" />
      </div>
    </CounterContext.Provider>
  );
}

export default App;
