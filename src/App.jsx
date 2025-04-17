import React from "react";
import CompA from "./Components/CompA/CompA";
import CompC from "./Components/CompC/CompC";
import Home from "./Components/Home/Home";
import Content from "./Components/Content/Content";

const App = () => {
  let name = "FSD-WD-T-B21"
  return (
    <div>
      <div id="app">{name}</div>
      <CompA />
      <Content/>
      <CompC />
      <Home />
    </div>
  );
};

export default App;
