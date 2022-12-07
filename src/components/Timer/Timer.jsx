import React, { useState, useEffect, useCallback } from "react";
import { Button, Flex } from "@chakra-ui/react";
//import { motion } from "framer-motion";
//import { motion } from "framer-motion";
// import { Image, Flex } from "@chakra-ui/react";
// import lotus from "./../../assets/lotus.jpeg";

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
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds, countDirection, reset, countDown, countUp]);

  return (
    <>
      <Flex flexDirection="row" alignItems="center">
        <Flex
          border="1px solid white"
          minHeight="100%"
          fontSize="2xl"
          color="purple.600"
          justifyContent="center"
          display="flex"
        >
          {" "}
          {breathLabel}
        </Flex>

        <Flex
          p="2rem"
          display="flex"
          m="4rem"
          borderRadius="3px"
          textTransform="uppercase"
          fontWeight={100}
          fontSize="4rem"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          borderStyle="groove"
        >
          {seconds}
        </Flex>
        <Flex
          padding="6rem 1.5rem"
          direction="row"
          p="6px"
          mb="4px"
          alignItems="center"
          justifyContent="center"
          display="flex"
        >
          <Button
            display="flex"
            padding="6rem 1.5rem"
            m="4rem"
            p="6px"
            borderRadius="3px"
            textTransform="uppercase"
            fontWeight={100}
            fontSize="2rem"
            borderStyle="groove"
            className={`button button-primary button-primary-${
              isActive ? "active" : "inactive"
            }`}
            onClick={toggle}
          >
            {" "}
            {isActive ? "Pause" : "Start"}
          </Button>
        </Flex>
        <Flex
          padding="6rem 1.5rem"
          direction="row"
          p="6px"
          mb="4px"
          alignItems="center"
          justifyContent="center"
          display="flex"
        >
          <Button
            display="flex"
            padding="6rem 1.5rem"
            m="4rem"
            p="6px"
            borderRadius="3px"
            textTransform="uppercase"
            fontWeight={100}
            fontSize="2rem"
            borderStyle="groove"
          >
            {reset}
            Reset
          </Button>
        </Flex>
      </Flex>
    </>
  );
};
