import {
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { DrawerMenu } from "../components/DrawerMenu";

const elements = [
  { id: 1, name: "pizza" },
  { id: 2, name: "burgers" },
  { id: 3, name: "hamburgers" },
  { id: 4, name: "donar" },
  { id: 5, name: "lavash" },
  { id: 6, name: "chicken" },
  { id: 7, name: "kartoshka fri" },
];

export const Header = () => {
  return (
    <Box w={"100%"} maxW={"1260px"} m={"0 auto"} bg={""}>
      <Container maxW={"1260px"}>
        <Box my={"17px"}>
          <Box display={"flex"}alignItems={"center"}justifyContent={"space-between"}>
            <Heading color={"#ff4600"}>Fast food.uz</Heading>
            <Input w={"430px"} placeholder="find the food " />
            <Box>
              {/* <Image src={''}/> */}
              <Text className="phoneNumber" fontSize={"17px"}> uzbekistan</Text>
            </Box>
            <Box>
              {/* <Image src={''}/> */}
              <Heading className="phoneNumber"  fontSize={"17px"}> +998 88-602-47-77</Heading>
            </Box>
            <Box>
              {/* <Image src={''}/> */}
              <Text display={{base:'none',lg:'flex'}} fontSize={"17px"}> Вход  /  Регистрация</Text>
            </Box>
          </Box>
        </Box>


        {/* //////// ikkinchi bolak //////// */}

        <hr />
        <Box  mt={"26px"} display={"flex"} justifyContent={"space-between"} >
            <DrawerMenu/>
          <Button border={"1px solid #220a4e"}bg={"#2E1066"}color={"white"}_hover={{background: "none",border: "1px solid #2E1066",color: "#1B1D1F",}}padding={"12px 20px"}>Все категории</Button>
          <Box display={{base:'none',lg:"flex"}}alignItems={"center"}w={"70%"}justifyContent={"space-around"}>
            {elements.map((item) => (
              <Text key={item.id}_hover={{ color: "#ff4600" }}transition={"0.4s"}cursor={"pointer"}color={"#1B1D1F"}fontSize={"16px"}>{item.name}</Text>
            ))}
          </Box>
              
          <Button display={'flex'} padding={"12px 20px"}>Karzina</Button>
        </Box>
      </Container>
    </Box>
  );
};
