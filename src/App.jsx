import React from "react";
import CompA from "./Components/CompA/CompA";
import CompB from "./Components/CompB/CompB";
import CompC from "./Components/CompC/CompC";
import Home from "./Components/Home/Home";

const App = () => {
  return (
    <div>
      <h1 id="app">App Component</h1>
      <CompA />
      <CompB />
      <CompC />
      <Home />
    </div>
  );
};

export default App;
