import React from "react";
import { Timer } from "./components/Timer/Timer";
import { Header } from "./components/Header/Header";
import { ImageGrid } from "./components/ImageGrid/ImageGrid";
import Description from "./components/Description/Description";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Box
        w="100%"
        h="calc(100vh)"
        p={4}
        bgGradient={[
          "linear(to-tr, pink.300, red.300)",
          "linear(to-t, blue.200, teal.500)",
          "linear(to-b, orange.100, purple.300)",
        ]}
      >
        <Header />
        <ImageGrid />
        <Timer />
        <Description />
      </Box>
    </>
  );
}

export default App;
