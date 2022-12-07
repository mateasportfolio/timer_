import React from "react";
import { Flex } from "@chakra-ui/react";
// import Lottie from "lottie-react";
// // import circle from "../../assets/circle.json";
// import atme from "../../assets/atme.json";

export const ImageGrid = () => {
  return (
    <>
      <Flex
        minHeight="100vh"
        width="90%"
        m="auto"
        alignSelf="center"
        mb="2px"
        position="relative"
      >
        {/* <Lottie
          animationData={atme}
          flexDirection="column"
          justifyContent="center"
        /> */}
        {/* <Box
          width="90%"
          m="auto"
          alignSelf="center"
          mb="20px"
          flexDirection={{ base: "column", sm: "row-reverse" }}
        /> */}

        <Flex
          width="50%"
          m="auto"
          alignSelf="center"
          mb="20px"
          justifyContent="flex-start"
        >
          {" "}
        </Flex>
      </Flex>
    </>
  );
};
