import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [display, setDisplay] = React.useState(false);

  const textData =
    "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy";

  const clickFn = () => {
    setDisplay(true);
  };

  return (
    <>
      <div id="main">// Do not alter the main div</div>
      <button id="click" onClick={clickFn}>
        CLICK
      </button>
      {display && <p id="para">{textData}</p>}
    </>
  );
}

export default App;
