import { Box, Container } from "@chakra-ui/react";
import React from "react";
import Carousel from "../components/carousel";
import { Cards } from "../components/Cards";

export const ReklamaBolimi = () => {
  return (
    <Box bg={"#FAFAFD"}>
      <Container maxW={'1260px'}>
        <Carousel />
        <Cards/>
      </Container>
    </Box>
  );
};
