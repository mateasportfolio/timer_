import React, { useState, useEffect, useCallback } from "react";
import { Button, Flex, Stack, Box, VStack, Text } from "@chakra-ui/react";

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
    setIsActive(true);
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
    // SYNTAX
    // useEffect(() => {
    //   const timer = setTimeout(() => {
    //     console.log('This will run after 1 second!')
    //   }, 1000);
    //   return () => clearTimeout(timer);
    // }, []);

    return () => clearInterval(interval);
  }, [isActive, seconds, countDirection, countDown, countUp]);

  return (
    <>
      <>
        <Text border="1px solid red">In Progress</Text>
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          justifyContent="center"
        >
          <Stack
            flexDirection="column"
            display="flow-root"
            width={150}
            fontSize="2xl"
            color="purple.600"
            padding={2}
            margin={4}
          >
            {" "}
            <VStack
              flexDirection="column"
              display="flex"
              width={150}
              fontSize="2xl"
              color="purple.600"
              padding={2}
              margin={4}
            >
              {breathLabel}
            </VStack>
            <Box
              flexDirection="row"
              position="relative"
              padding={0}
              display="flex"
              margin={4}
              borderRadius="3px"
              textTransform="uppercase"
              fontWeight={100}
              fontSize="4rem"
              alignItems="center"
              justifyContent="start"
            >
              {seconds}
            </Box>{" "}
          </Stack>
        </Flex>

        <Button
          margin={4}
          padding={6}
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
      </>
      <Flex alignItems="space-between" justifyContent="flex-start">
        <Button
          margin={4}
          padding={6}
          borderRadius="3px"
          textTransform="uppercase"
          fontWeight={100}
          fontSize="2rem"
          borderStyle="groove"
          className={`button button-primary button-primary-${
            isActive ? "active" : "inactive"
          }`}
          onClick={reset}
        >
          Reset
        </Button>
      </Flex>
    </>
  );
};
