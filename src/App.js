import React from "react";
import { useState } from "react";

const App = () => {
  const [state, setState] = useState(0);

  const btnOnClickEventHandler = () => {
    setState((prev) => {
      return prev + 1;
    });
  };

  return (
    <div>
      <button className="p-5 bg-red-300" onClick={btnOnClickEventHandler}>{state}</button>
    </div>
  );
};

export default App;
