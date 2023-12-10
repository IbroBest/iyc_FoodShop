import { Box, Container, Heading, Image, Input } from "@chakra-ui/react";
import React from "react";
import settingLogo from "../assets/images/settings.png";
export const Navbar = () => {
  return (
    <Box bg={"#FFFFFF"}>
      <Container maxW={"1260px"} m={"0 auto"}>
        {/* birinchi bolaki  */}
        <Box my={"17px"}>
          <Box display={'flex'} alignItems={'center'} gap={'20px'}>
            <Heading color={"#ff4600"}>Pizza.uz</Heading>
            <Input w={'430px'} placeholder='find the food '  />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
