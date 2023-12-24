import { Box, Card, Heading, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import one from '../assets/icons/pizzaIcon.webp'
import two from '../assets/icons/secondCardIcon.svg'
import three from '../assets/icons/threeCardIcon.svg'

const cards = [
    {title:'Neapolitan Pizza',desc:'11$'},
    {title:'Chicago Pizza',desc:'49$'},
    {title:'New York Pizza',desc:'25$'},
    {title:'Sicilian Pizza',desc:'18$'},
    {title:'Greek Pizza.',desc:'16$'},
    {title:'California Pizza',desc:'17$'},
    {title:'Detroit Pizza',desc:'20$'},
    {title:'St. Louis Pizza ',desc:'35$'},
    {title:'Roman Pizza ',desc:'37$'},
]

export const Cards = () => {
  return (
    <Box mt={'40px'}>
        <Box display={{base:'none',md:'flex'}} flexDirection={'column'}>
            <Box display={'flex'}>
                {cards.slice(0,3).map((item)=>(

                <Box alignItems={'center'} display={'flex'}gap={'35px'} border={'1px solid red'} w={'100%'}h={'100px'} padding={'28px'}>
                    <Image w={'60px'}h={'60px'} src={one}/>
                    <Box textAlign={'start'}>
                        <Heading fontWeight={'500'}fontSize={'22px'}>{item.title}</Heading>
                        <Text color={'grey'}>{item.desc}</Text>
                     </Box>                    
                </Box>))}
            </Box>

            {/* 2-bolak */}

            <Box display={'flex'}>
                {cards.slice(3,6).map((item)=>(
                <Box alignItems={'center'} display={'flex'}gap={'35px'} border={'1px solid red'} w={'100%'}h={'100px'} padding={'28px'}>
                    <Image w={'60px'}h={'60px'} src={one}/>
                    <Box textAlign={'start'}>
                        <Heading fontWeight={'500'}fontSize={'22px'}>{item.title}</Heading>
                        <Text color={'grey'}>{item.desc}</Text>
                     </Box>
                    
                </Box>))}
            </Box>

                {/* 3-bolak */}

                <Box display={'flex'}>
                {cards.slice(6,9).map((item)=>(

                <Box alignItems={'center'} display={'flex'}gap={'35px'} border={'1px solid red'} w={'100%'}h={'100px'} padding={'28px'}>
                    <Image w={'60px'}h={'60px'} src={one}/>
                    <Box textAlign={'start'}>
                        <Heading fontWeight={'500'}fontSize={'22px'}>{item.title}</Heading>
                        <Text color={'grey'}>{item.desc}</Text>
                     </Box>
                    
                </Box>))}

            </Box>
        </Box>
        <Box display={{base:'flex',md:'none'}} flexDirection={'column'}>
                {cards.map((item)=>(
                <Box alignItems={'center'} display={'flex'}gap={'35px'} border={'1px solid red'} w={'100%'}h={'100px'} padding={'28px'}>
                    <Image w={'60px'}h={'60px'} src={one}/>
                    <Box textAlign={'start'}>
                        <Heading fontWeight={'500'}fontSize={'22px'}>{item.title}</Heading>
                        <Text color={'grey'}>{item.desc}</Text>
                     </Box>                    
                </Box>))}
            </Box>
    </Box>
  )
}
{/* <Box display={'flex'} flexDirection={'column'}>
                {cards.map((item)=>(
                <Box alignItems={'center'} display={'flex'}gap={'35px'} border={'1px solid red'} w={'100%'}h={'100px'} padding={'28px'}>
                    <Image w={'60px'}h={'60px'} src={one}/>
                    <Box textAlign={'start'}>
                        <Heading fontWeight={'500'}fontSize={'22px'}>{item.title}</Heading>
                        <Text color={'grey'}>{item.desc}</Text>
                     </Box>                    
                </Box>))}
            </Box> */}