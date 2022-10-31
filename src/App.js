import React from "react";
import { Timer } from "./components/Timer/Timer";
import { Header } from "./components/Header/Header";
import { ImageGrid } from "./components/ImageGrid/ImageGrid";
import Description from "./components/Description/Description";
import { Box } from "@chakra-ui/react";

function App() {
  // const { colorMode, toggleColorMode } = useColorMode();
  // const isDark = colorMode === "dark";

  // const breakpoints = {
  //   sm: "30em",
  //   md: "48em",
  //   lg: "62em",
  //   xl: "80em",
  //   "2xl": "96em",
  // };

  return (
    <div className="App">
      <Box
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
    </div>
  );
}

export default App;
