import React from "react";
import { Text } from "@chakra-ui/react";

export const Header = () => {
  return (
    <div className="header">
      <Text fontSize="3xl" textAlign="center" p="2" color="purple.300">
        Meditation-Timer
      </Text>

      <Text p="10" color="whiteAlpha.900" fontSize="xl">
        Create your own meditation timers Meditate following our simple guided
        meditations and breathing exercises
      </Text>
    </div>
  );
};
