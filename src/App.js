import React from "react";
import "./App.css";
import { Button, Stack } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";
import { Timer } from "./components/Timer/Timer";

function App() {
  return (
    <div className="App">
      <Timer />
      <Text fontSize="3xl" textAlign="center">
        Meditation-Timer
      </Text>
      <Text>
        Create your own meditation timers Meditate following our simple guided
        meditations and breathing exercises
      </Text>
      <div className="header">
        <Stack spacing={10} direction="column" align="left">
          <div className="button-left">
            <Button
              isLoading
              loadingText="Breathe in"
              variant="solid"
              spinnerPlacement="start"
              colorScheme="pink"
            ></Button>
          </div>
          <div className="button-right">
            <Button
              isLoading
              loadingText="Breathe out"
              variant="solid"
              spinnerPlacement="start"
              colorScheme="pink"
            ></Button>
            <Stack direction="column" spacing={4} align="center">
              <Spinner size="xl" />
            </Stack>
          </div>
        </Stack>
      </div>
    </div>
  );
}

export default App;
