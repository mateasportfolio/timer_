import React, { useState, useEffect, useCallback } from "react";
import { Box, Button, Stack } from "@chakra-ui/react";

export const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [breathLabel, setBreathLabel] = useState("");
  const [countDirection, setCountDirection] = useState("up");

  function toggle() {
    setIsActive(!isActive);
  }

  // eslint-disable-next-line
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
    <>
      <Box fontSize="xl" color="purple.600">
        {breathLabel}
      </Box>
      <Box fontSize="xl" color="purple.600">
        {seconds}
      </Box>
      <Stack direction="row" spacing={4}>
        <Button
          colorScheme="white"
          variant="ghost"
          className={`button button-primary button-primary-${
            isActive ? "active" : "inactive"
          }`}
          onClick={toggle}
        >
          {" "}
          {isActive ? "Pause" : "Start"}
        </Button>

        <Box />
        <Button colorScheme="white" variant="ghost">
          Reset
        </Button>
      </Stack>
    </>
  );
};
