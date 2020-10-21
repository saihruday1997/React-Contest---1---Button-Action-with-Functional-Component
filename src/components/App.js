import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [text, setText] = React.useState("");

  const clickFn = (text) => {
    setText(text);
  };

  return (
    <>
      <div id="main">// Do not alter the main div</div>
      <button id="click" onClick={clickFn}>
        CLICK
      </button>
    </>
  );
}

export default App;
