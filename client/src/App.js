import React from "react";
import "./App.css";
import Player from "./comp/Players";
import Header from "../src/comp/header";

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Gracee's Sprint</h1>

      <Player />
    </div>
  );
}

export default App;
