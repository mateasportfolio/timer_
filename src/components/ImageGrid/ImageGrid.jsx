import { Grid, GridItem, Image } from "@chakra-ui/react";
import React from "react";
import { auroraboralis, pink, sterne, tree } from "../../assets";
import "./style.css";

export const ImageGrid = () => {
  return (
    <div className="image__container">
      <Grid
        h="200px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={1} className="grid-item">
          <Image src={tree} objectFit="cover" className="grid-img" />
        </GridItem>
        <GridItem rowSpan={1} colSpan={2} className="grid-item">
          <Image src={sterne} objectFit="cover" className="grid-img" />
        </GridItem>
        <GridItem rowSpan={1} colSpan={2} className="grid-item">
          <Image src={auroraboralis} objectFit="cover" className="grid-img" />
        </GridItem>
        <GridItem rowSpan={1} colSpan={4} className="grid-item">
          <Image src={pink} objectFit="cover" className="grid-img" />
        </GridItem>
      </Grid>
    </div>
  );
};
