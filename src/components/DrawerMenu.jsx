import { Box, Button, CloseButton, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Heading, Image, Radio, RadioGroup, Stack, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import hamburgerIcon from '../assets/icons/hamburberIcon.svg'

export const DrawerMenu = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState('left')


    const elements = [
      { id: 1, name: "pizza" },
      { id: 2, name: "burgers" },
      { id: 3, name: "hamburgers" },
      { id: 4, name: "donar" },
      { id: 5, name: "lavash" },
      { id: 6, name: "chicken" },
      { id: 7, name: "kartoshka fri" },
    ];
  return (
    <Box >
      <RadioGroup defaultValue={placement} onChange={setPlacement}>
      </RadioGroup>
      <Box gap={'5px'} onClick={onOpen} bg={'black'}_hover={{opacity:'0.8'}} padding={'10px'}borderRadius={'6px'}display={'flex'}>
        <Image src={hamburgerIcon}/>
        <Heading fontSize={'18px'} color={'white'} display={{base:'none',lg:'flex'}}>Все категории</Heading>
      </Box>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
          <DrawerBody>
            <CloseButton onClick={onClose}/>
            <Box display={'flex'}flexDirection={'column'} alignItems={"center"}w={"70%"}justifyContent={"space-around"}>
            {elements.map((item) => (
              <Text key={item.id}_hover={{ color: "#ff4600" }}transition={"0.4s"}cursor={"pointer"}color={"#1B1D1F"}fontSize={"20px"}>{item.name}</Text>
            ))}
          </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}
