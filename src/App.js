import React from "react";
import { Timer } from "./components/Timer/Timer";
import { Header } from "./components/Header/Header";
import { ImageGrid } from "./components/ImageGrid/ImageGrid";
import { Box, Flex } from "@chakra-ui/react";
import Lottie from "lottie-react";
import breathe from "./assets/breathe.json";
import circle from "./assets/circle.json";

function App() {
  return (
    <>
      <Flex
        w="100%"
        h="calc(100vh)"
        bg="purple.100"
        flexDirection="row"
        flex="1"
        alignItems="center"
        height={400}
        border="2px solid white"
        p="2px"
        bgGradient={[
          "linear(to-tr, pink.300, red.300)",
          "linear(to-t, yellow.200, violet.500)",
          "linear(to-b, orange.100, purple.300)",
        ]}
      >
        <Lottie animationData={breathe} />
      </Flex>

      <Box
        w="100%"
        h="calc(100vh)"
        p={4}
        bg="blue.100"
        bgGradient={[
          "linear(to-tr, pink.300, red.300)",
          "linear(to-t, yellow.200, violet.500)",
          "linear(to-b, orange.100, purple.300)",
        ]}
      >
        <Header />

        <Flex
          w="100%"
          h="calc(100vh)"
          m="auto"
          alignSelf="center"
          flexDirection="row"
        >
          <Timer />
          <Lottie animationData={circle} value="overlay" />
          <ImageGrid />
        </Flex>
      </Box>
    </>
  );
}

export default App;
