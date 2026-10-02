import React, { useState } from "react";

const App = () => {
  return (
    <div className="App">
      <h2>Select your favorite color!</h2>
      <div className="color-picker">
        <label htmlFor="color">Click me ▶▶▶ </label>
        <input className="color-input" type="color" id="color" />
      </div>
      <div
        className="color-square"
        style={
          {
            /* something goes here */
          }
        }
      ></div>
    </div>
  );
};

export default App;
