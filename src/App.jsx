import React from "react";
import CompA from "./Components/CompA/CompA";
import CompB from "./Components/CompB/CompB";
import CompC from "./Components/CompC/CompC";
import Home from "./Components/Home/Home";

const App = () => {
  let name = "FSD-WD-T-B21"
  return (
    <div>
      <div id="app">{name}</div>
      <CompA />
      <CompB />
      <CompC />
      <Home />
    </div>
  );
};

export default App;
