import {
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { DrawerMenu } from "../components/DrawerMenu";
import location from '../assets/icons/location.svg'
import call from '../assets/icons/call.svg'
import person from '../assets/icons/person.svg'
import karzinaLogo from '../assets/icons/karzina.svg'

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
            <Input display={{base:'none',lg:'flex'}} w={"400px"} placeholder="find the food " />
          <Box display={'flex'}  gap={'20px'}alignItems={'center'}>
            
            <Box display={'flex'}>
              <Image src={location}/>
              <Text className="phoneNumber"> uzbekistan</Text>
            </Box>

            <Box display={{base:'flex',lg:'none'}} position={'relative'}>
              <Text position={'absolute'}top={'-6px'}right={'-6px'} bg={'#FD6019'}color={'white'} w={'20px'}h={'20px'}display={'flex'}justifyContent={'center'}alignItems={'center'} borderRadius={'50%'}>0</Text>
              <Image display={{base:'flex',lg:'flex'}} src={karzinaLogo}/>
            </Box>

            <Box display={'flex'}>
              <Image src={call}/>
              <Text className="phoneNumber"> +99888-602-47-77</Text>
            </Box>
            
            <Box display={'flex'}>
              <Image src={person}/>
              <Text className="phoneNumber"> Вход  /  Регистрация</Text>
            </Box>
          </Box>
          </Box>
        </Box>


        {/* //////// ikkinchi bolak //////// */}

        <hr />
        <Box  mt={"26px"} display={"flex"} justifyContent={"space-between"} >
          <DrawerMenu />
          <Box display={{base:'none',lg:"flex"}}alignItems={"center"}w={"70%"}justifyContent={"space-around"}>
            {elements.slice(0,5).map((item) => (
              <Text key={item.id}_hover={{ color: "#ff4600" }}transition={"0.4s"}cursor={"pointer"}color={"#1B1D1F"}fontSize={"16px"}>{item.name}</Text>
            ))}
          </Box>
          <Input ml={'20px'} display={{base:'flex',lg:'none'}} w={"100%"} placeholder="find the food " />

          <Box display={{base:'none',lg:'block'}} position={'relative'}>
            <Text position={'absolute'}top={'-6px'}right={'-6px'} bg={'#FD6019'}color={'white'} w={'20px'}h={'20px'}display={'flex'}justifyContent={'center'}alignItems={'center'} borderRadius={'50%'}>0</Text>
            <Image display={{base:'none',lg:'flex'}} src={karzinaLogo}/>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
