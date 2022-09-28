import React, { useState, useEffect } from "react";
import "./style.css";

export const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [breathLabel, setBreathLabel] = useState("");
  const [countDirection, setCountDirection] = useState("up");

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setBreathLabel("");
    setCountDirection("up");
    setSeconds(0);
    setIsActive(false);
  }
  const countUp = () => {
    if (seconds >= 4) setCountDirection("down");
    setBreathLabel("Breath In...");
    setSeconds((seconds) => seconds + 1);
  };

  const countDown = () => {
    if (seconds <= 1) setCountDirection("up");
    setBreathLabel("Breath Out...");
    setSeconds((seconds) => seconds - 1);
  };

  useEffect(() => {
    let interval = null;
    if (isActive && countDirection === "up") {
      interval = setInterval(() => {
        countUp();
      }, 1000);
    }

    if (isActive && countDirection === "down") {
      interval = setInterval(() => {
        countDown();
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className="timer">
      <div className="breath_label">{breathLabel}</div>
      <div className="time">{seconds}s</div>
      <div className="row">
        <button
          className={`button button-primary button-primary-${
            isActive ? "active" : "inactive"
          }`}
          onClick={toggle}
        >
          {isActive ? "Pause" : "Start"}
        </button>
        <button className="button" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};
