import React from 'react'
import HeaderTwo from '@/components/headerTwo'
import Sidebar from '@/components/Sidebar'
import { Flex, Box, CardBody, Image, Heading, Text, Stack, Divider, Card, CardFooter,ButtonGroup, Button, Icon, SimpleGrid } from '@chakra-ui/react'
import  { BsCartFill } from "react-icons/bs"

function product() {
  return (
    <Flex h="100vh" flexDirection="column">
        <HeaderTwo/>
        <Flex w="100%" my="6" maxW={1200} mx="auto" px="6" h="110vh" >
          <Flex flexDirection="row">
        <Sidebar/>
        </Flex>
        <Box ml="10" w="100%">
          <SimpleGrid columnGap="20px" rowGap="20px"  columns={[1,2,3]} w="100">
            <Card maxW='300px' mr="7" mb="7" >
              <CardBody>
                <Image
                  src='https://th.bing.com/th/id/OIP.cEttqdqq1j3lCZBG7ZEiQgHaHa?pid=ImgDet&rs=1'
                  alt='Green double couch with wooden legs'
                  borderRadius='lg'
                  boxSize='250px'
                />
                <Stack mt='6' spacing='3'>
                  <Heading size='20px' >CALÇA MOLETOM</Heading>
                  <Text fontSize="14px">
                     CALÇA MOLETOM NIKE MASCULINA SKINNY JOGGER TREINO ESPORTIVA 
                  </Text>
                  <Text color='blue.600' fontSize='25px'>
                    R$150
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing='2'>
                  <Button variant='solid' colorScheme='blue'>
                    Comprar Agora
                  </Button>
                  <Button variant='ghost' colorScheme='blue'>
                      <Icon as={BsCartFill} color="black"  w={7} h={7}/>
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
            <Card maxW='300px' mr="7" mb="7">
              <CardBody>
                <Image
                  src='https://http2.mlstatic.com/D_NQ_NP_942404-MLB45867097673_052021-O.webp'
                  alt='Green double couch with wooden legs'
                  borderRadius='lg'
                  boxSize='250px'
                />
                <Stack mt='6' spacing='3'>
                  <Heading size='20px' >Kit 3 Calça De Moleton </Heading>
                  <Text fontSize="14px">
                    Kit 3 Calça De Moleton Liso Masculino Moleton Vários Cores
                  </Text>
                  <Text color='blue.600' fontSize='25px'>
                    R$189
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing='2'>
                  <Button variant='solid' colorScheme='blue'>
                    Comprar Agora
                  </Button>
                  <Button variant='ghost' colorScheme='blue'>
                      <Icon as={BsCartFill} color="black"  w={7} h={7}/>
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
            </SimpleGrid>
        </Box>
        </Flex>
    </Flex>
  )
}

export default product