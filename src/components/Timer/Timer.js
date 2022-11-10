import React, { useState, useEffect, useCallback } from "react";
import { Box, Button } from "@chakra-ui/react";

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
    <div>
      <Box fontSize="xl" color="purple.600">
        {breathLabel}
      </Box>
      <Box fontSize="xl" color="purple.600">
        {seconds}
      </Box>

      <Button
        className={`button button-primary button-primary-${
          isActive ? "active" : "inactive"
        }`}
        as="button"
        onClick={toggle}
        lineHeight="1.5"
        transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
        border="0.5px"
        px="10px"
        borderRadius="1px"
        fontSize="xl"
        fontWeight="light"
        bg="pink"
        borderColor="red"
        color="blue"
        _hover={{ bg: "##F9A3CB" }}
        _active={{
          bg: " #EF87BE",
          transform: "scale(0.98)",
          borderColor: "#00000",
        }}
        _focus={{
          boxShadow:
            "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
        }}
      >
        {isActive ? "Pause" : "Start"}
      </Button>
      <Box>
        <Button
          as="button"
          onClick={reset}
          lineHeight="1.5"
          transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
          border="0.5px"
          px="10px"
          borderRadius="1px"
          fontSize="xl"
          fontWeight="light"
          bg="pink"
          borderColor="red"
          color="blue"
          _hover={{ bg: "##F9A3CB" }}
          _active={{
            bg: " #EF87BE",
            transform: "scale(0.98)",
            borderColor: "#00000",
          }}
          _focus={{
            boxShadow:
              "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
          }}
        >
          Reset
        </Button>
      </Box>
    </div>
  );
};
