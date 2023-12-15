import { Box, Container, Heading, Image, Input, Text } from "@chakra-ui/react";
import React from "react";
import { SearchIcon } from "@chakra-ui/icons";
// import {LocationIcon}from '../assets/icons/location.svg'

export const Navbar = () => {
  return (
    <Box bg={"#FFFFFF"}>
      <Container   >
        {/* birinchi bolaki  */}
        <Box my={"17px"}>
          <Box display={"flex"} alignItems={"center"}justifyContent={'space-between'}>
            <Heading color={"#ff4600"}>Fast food.uz</Heading>
            <Input w={"430px"} placeholder="find the food " />
            <Box>
              {/* <Image src={''}/> */}
              <Text fontSize={'17px'}> uzbekistan</Text>
            </Box>
            <Box>
              {/* <Image src={''}/> */}
              <Heading fontSize={'17px'}> +998 88-602-47-77</Heading>
            </Box>
            <Box>
              {/* <Image src={''}/> */}
              <Text fontSize={'17px'}> Вход  /  Регистрация</Text>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
