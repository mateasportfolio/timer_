import React from "react";
import "./App.css";
import { Timer } from "./components/Timer/Timer";
import { Header } from "./components/Header/Header";
import { ImageGrid } from "./components/ImageGrid/ImageGrid";

function App() {
  return (
    <div className="App">
      <Header />
      <ImageGrid />
      <Timer />
    </div>
  );
}

export default App;
