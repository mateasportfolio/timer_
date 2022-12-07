import React, { useState, useEffect, useCallback } from "react";
import { Box, Button, HStack } from "@chakra-ui/react";

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
      <>
        <Box
          fontSize="2xl"
          color="purple.600"
          p="8px"
          justifyContent="center"
          display="flex"
        >
          {breathLabel}
        </Box>
        <Button
          boxShadow="dark-lg"
          p="3"
          rounded="md"
          bg="pink.100"
          size="sm"
          fontSize="3xl"
          color="white.300"
          m="2px"
        >
          {seconds}
        </Button>
        <HStack
          direction="row"
          spacing={2}
          p="6px"
          mb="4px"
          alignItems="center"
          justifyContent="center"
          display="flex"
        >
          <Button
            boxShadow="xs"
            p="6"
            rounded="lg"
            bg="pink.100"
            size="lg"
            justifyContent="flex-start"
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

          <Button
            boxShadow="xs"
            p="6"
            rounded="md"
            bg="pink.100"
            size="lg"
            colorScheme="white"
            variant="ghost"
            justifyContent="flex-start"
          >
            Reset
          </Button>
        </HStack>
      </>
    </>
  );
};
