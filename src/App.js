import React from "react";
import { useState } from "react";

const App = () => {
  const [state, setState] = useState(0);

  const btnOnClickEventHandler = () => {
    setState((prev) => {
      console.log(prev);
      return prev + 1;
    });
  };

  return (
    <div>
      <div>{state}</div>
      <button onClick={btnOnClickEventHandler}>sdfsdf</button>
    </div>
  );
};

export default App;
