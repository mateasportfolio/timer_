import React from "react";
import "./App.css";
import { Timer } from "./components/Timer/Timer";
import { Header } from "./components/Header/Header";
import { ImageGrid } from "./components/ImageGrid/ImageGrid";

function App() {
  return (
    <div className="App">
      <Header />
      <ImageGrid />
      <Timer />
    </div>
  );
}

export default App;
{
  /* <div className="header">
        <Stack spacing={10} direction="column" align="left">
          <div className="button-left">
            <Button
              isLoading
              loadingText="Breathe in"
              variant="solid"
              spinnerPlacement="start"
              colorScheme="pink"
            ></Button>{" "}
          </div>{" "}
        </Stack>
      </div> */
}
{
  /*}
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
  {*/
}
