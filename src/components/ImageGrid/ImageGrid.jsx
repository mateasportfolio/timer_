import React from "react";
import { Flex } from "@chakra-ui/react";

export const ImageGrid = () => {
  return (
    <>
      <Flex
        border="2px solid white"
        maxHeight="100%"
        width="100%"
        margin={2}
        alignSelf="center"
        mb={2}
        flexDirection="column"
        justifyContent="start"
      ></Flex>
    </>
  );
};
