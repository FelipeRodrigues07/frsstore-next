import React from 'react'
import HeaderTwo from '@/components/headerTwo'
import Sidebar from '@/components/Sidebar'
import { Flex, Box, CardBody, Image, Heading, Text, Stack, Divider, Card, CardFooter,ButtonGroup, Button, Icon, SimpleGrid } from '@chakra-ui/react'
import  { BsCartFill  } from "react-icons/bs"

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
                  src='https://th.bing.com/th/id/OIP.xrcI225ZKB0EQZpMCWf7FwHaI4?pid=ImgDet&rs=1'
                  alt='Green double couch with wooden legs'
                  borderRadius='lg'
                  boxSize='250px'
                />
                <Stack mt='6' spacing='3'>
                  <Heading size='20px' >Camiseta Puma</Heading>
                  <Text fontSize="14px">
                    Camiseta Academia Esporte Dry Fit Blue
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
                      <Icon as={BsCartFill } color="black"  w={7} h={7}/>
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
            <Card maxW='300px' mr="7" mb="7">
              <CardBody>
                <Image
                  src='https://th.bing.com/th/id/R.3adf32d11d500b28d888cf058d902e60?rik=QF40IbAy6P3aSA&pid=ImgRaw&r=0'
                  alt='Green double couch with wooden legs'
                  borderRadius='lg'
                  boxSize='250px'
                />
                <Stack mt='6' spacing='3'>
                  <Heading size='20px' >Camiseta LYFT</Heading>
                  <Text fontSize="14px">
                    Camiseta Camisa Treino Academia Musculação Fitness Lyft
                  </Text>
                  <Text color='blue.600' fontSize='25px'>
                    R$130
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
                      <Icon as={BsCartFill } color="black"  w={7} h={7}/>
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
            <Card maxW='300px' mr="7" mb="7">
              <CardBody>
                <Image
                  src='https://th.bing.com/th/id/OP.OJtSOMbYAk7frA474C474?o=5&pid=21.1&w=160&h=220'
                  alt='Green double couch with wooden legs'
                  borderRadius='lg'
                  boxSize='250px'
                />
                <Stack mt='6' spacing='3'>
                  <Heading size='20px' >Camiseta Dry</Heading>
                  <Text fontSize="14px">
                      Combo 5 Camisetas Masculina Dry Academia Treino Musculação
                  </Text>
                  <Text color='blue.600' fontSize='25px'>
                    R$180
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
                      <Icon as={BsCartFill } color="black"  w={7} h={7}/>
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
            <Card maxW='300px' mr="7" mb="7">
              <CardBody>
                <Image
                  src='https://th.bing.com/th/id/OIP.eb6Qx9Rzv3FNE7jxxttUXwHaHa?w=187&h=188&c=7&r=0&o=5&pid=1.7'
                  alt='Green double couch with wooden legs'
                  borderRadius='lg'
                  boxSize='250px'
                />
                <Stack mt='6' spacing='3'>
                  <Heading size='20px' >Camisa Corinthians</Heading>
                  <Text fontSize="14px">
                      Camisa Corinthians I 15/16 s/nº - Torcedor Nike Masculina - Branco+Preto
                  </Text>
                  <Text color='blue.600' fontSize='25px'>
                    R$720
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
                      <Icon as={BsCartFill } color="black"  w={7} h={7}/>
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
            <Card maxW='300px' >
              <CardBody>
                <Image
                  src='https://th.bing.com/th/id/R.1cc9f331d4b44d0665c19790955fa913?rik=k7tCcWMoLV5phw&pid=ImgRaw&r=0'
                  alt='Green double couch with wooden legs'
                  borderRadius='lg'
                  boxSize='250px'
                />
                <Stack mt='6' spacing='3'>
                  <Heading size='20px' >Camisa Red Bull</Heading>
                  <Text fontSize="14px">
                    Camiseta Puma Motorsport Red Bull Racing Team Masculina - Azul
                  </Text>
                  <Text color='blue.600' fontSize='25px'>
                    R$220
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
                      <Icon as={BsCartFill } color="black"  w={7} h={7}/>
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