import React from "react";
import "./App.css";
import { Timer } from "./components/Timer/Timer";
import { Header } from "./components/Header/Header";
import { ImageGrid } from "./components/ImageGrid/ImageGrid";
import Description from "./components/Description/Description";

function App() {
  return (
    <div className="App">
      <Header />
      <ImageGrid />
      <Timer />
      <Description />
    </div>
  );
}

export default App;
