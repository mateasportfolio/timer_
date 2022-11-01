import React, { useState, useEffect, useCallback } from "react";
import { Button } from "@chakra-ui/react";

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
  const countUp = useCallback(() => {
    if (seconds >= 4) setCountDirection("down");
    setBreathLabel("Breath In...");
    setSeconds((seconds) => seconds + 1);
  }, [seconds]);

  const countDown = useCallback(() => {
    if (seconds <= 1) setCountDirection("up");
    setBreathLabel("Breath Out...");
    setSeconds((seconds) => seconds - 1);
  }, [seconds]);

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
  }, [isActive, seconds, countDirection, countDown, countUp]);

  return (
    <div className="timer">
      <div className="breath_label">{breathLabel}</div>
      <div className="time">{seconds}s</div>
      <div className="row">
        <Button
          p="0.6rem"
          m="0.4rem"
          borderRadius="3"
          textTransform="uppercase"
          fontWeight="600"
          fontSize="0.8rem"
          borderStyle="groove"
          className={`button button-primary button-primary-${
            isActive ? "active" : "inactive"
          }`}
          onClick={toggle}
        >
          {isActive ? "Pause" : "Start"}
        </Button>
        <button
          p="0.6rem"
          m="0.4rem"
          borderRadius="3"
          textTransform="uppercase"
          fontWeight="600"
          fontSize="0.8rem"
          borderStyle="groove"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};
