import React from 'react'
import { Header } from './pages/Header'
import { Box, Container } from '@chakra-ui/react'
import { ReklamaBolimi } from './pages/ReklamaBo\'limi'

export const App = () => {
  return (
    <Box >
      <Header/>
      <ReklamaBolimi/>
    </Box>
  )
}
