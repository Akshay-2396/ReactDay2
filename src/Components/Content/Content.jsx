import React from 'react';
import "./content.css"
const Content = () => {
    const handelSubmit = ()=>{
        console.log("Button Clicked");
        
      }
    return (
        <div id ="con">
      <h1 id="htags">Content</h1>
      <button onClick={handelSubmit}>Click me!</button>
    </div>
    );
};

export default Content;