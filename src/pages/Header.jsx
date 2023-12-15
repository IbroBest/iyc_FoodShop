import { Box, Button, Container, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { Navbar } from "../components/navbar";
import Carousel from "../components/carousel";

const elements = [
  {id:1, name:'pizza'},
  {id:2, name:'burgers'},
  {id:3, name:'hamburgers'},
  {id:4, name:'donar'},
  {id:5, name:'lavash'},
  {id:6, name:'chicken'},
  {id:7, name:'kartoshka fri'},

]

export const Header = () => {
  return (
    <Box w={'100%'} maxW={'1260px'}m={'0 auto'} bg={''}>
      <Navbar />
      <hr />
      <Container maxW={"1260px"} m={"0 auto"}>
        <Box mt={'26px'} display={'flex'}justifyContent={'space-between'}>
          <Button border={'1px solid #220a4e'} bg={'#2E1066'}color={'white'}  _hover={{background:'none',border:'1px solid #2E1066',color:'#1B1D1F' }} padding={'12px 20px'}>Все категории</Button>
          <Box  display={'flex'} alignItems={'center'}w={'70%'} justifyContent={'space-around'}>
          {
            elements.map((item)=>(
              <Text key={item.id}  _hover={{color:'#ff4600'}}transition={'0.4s'}cursor={'pointer'} color={'#1B1D1F'}fontSize={'16px'}>{item.name}</Text>
            ))
          }
          </Box>
          <Button padding={'12px 20px'}>Все категории</Button>
        </Box>
      </Container>
    </Box>
  );
};
