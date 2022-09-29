import React from "react";
import { Text } from "@chakra-ui/react";
import "./style.css";

export const Header = () => {
  return (
    <div className="header">
      <Text fontSize="3xl" textAlign="center">
        Meditation-Timer
      </Text>
      <div className="copy_text">
        <Text colorScheme="purple">
          Create your own meditation timers Meditate following our simple guided
          meditations and breathing exercises
        </Text>
      </div>
    </div>
  );
};
