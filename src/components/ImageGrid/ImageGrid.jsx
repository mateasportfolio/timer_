import React from "react";
import { Flex, Image, Stack } from "@chakra-ui/react";
// import { motion } from "framer-motion";
// import Lottie from "lottie-react";
// // import circle from "../../assets/circle.json";
// import atme from "../../assets/atme.json";
import lotus from "../../assets/lotus.jpeg";

export const ImageGrid = () => {
  return (
    <>
      <Flex
        border="1px solid white"
        minHeight="100%"
        width="90%"
        m="auto"
        alignSelf="center"
        mb="2px"
      />

      <Image
        src={lotus}
        alt="blume"
        boxSize="250px"
        objectFit="cover"
        border="1px solid white"
      />
    </>
  );
};
