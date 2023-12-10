import React from 'react'
import { Header } from './pages/Header'
import { Box, Container } from '@chakra-ui/react'

export const App = () => {
  return (
    <Container maxW={'1260px'}m={'0 auto'}>
      <Header/>
    </Container>
  )
}
