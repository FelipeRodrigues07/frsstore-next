import React from 'react'
import { Link as ChakraLink, Flex, Stack, Text} from "@chakra-ui/react";
import { useRouter } from 'next/router';



function SidebarNav()  {

    const router = useRouter();

    const { asPath } = useRouter();
   
  return (
 <Stack spacing="6"> 
    <Stack>
        <Text fontSize="xs" fontWeight="bold" color="gray.400" >
            Masculino:
        </Text>
        <Stack>
        </Stack>
            <ChakraLink
            onClick={() => {
                router.push("/product")
            }}
            _hover={{ bg:"gray.100"}}  // underline é para efeito
            px="4"
            py="2"
            borderRadius={5}
            bg={asPath === "/product" ? "gray.200" : ""}
            >
                    <Text fontSize="md" fontWeight="medium" color="gray.500">
                        Camisetas
                    </Text>
            </ChakraLink>
            <ChakraLink
            onClick={() => {
                router.push("/pants")
            }}
            _hover={{ bg:"gray.100"}}  // underline é para efeito
            px="4"
            py="2"
            borderRadius={5}
            bg={asPath === "/pants" ? "gray.200" : ""}
            >
                    <Text fontSize="md" fontWeight="medium" color="gray.500">
                        Calças
                    </Text>
            </ChakraLink>
            <ChakraLink
            onClick={() => {
                router.push("/calca")
            }}
            _hover={{ bg:"gray.100"}}  // underline é para efeito
            px="4"
            py="2"
            borderRadius={5}
            bg={asPath === "/calca" ? "gray.200" : ""}
            >
                    <Text fontSize="md" fontWeight="medium" color="gray.500">
                        Moletons
                    </Text>
            </ChakraLink>
    </Stack>
    <Stack>
        <Text fontSize="xs" fontWeight="bold" color="gray.400">
            Feminino:
        </Text>
        <Stack>
        <ChakraLink
            onClick={() => {
                router.push("/saldo")
            }}
            _hover={{ bg:"gray.100"}}  // underline é para efeito
            px="4"
            py="2"
            borderRadius={5}
            bg={asPath === "/saldo" ? "gray.200" : ""}
            >
                    <Text fontSize="md" fontWeight="medium" color="gray.500">
                        Camisetas
                    </Text>
            </ChakraLink>
            <ChakraLink
             onClick={() => {
                router.push("/entradas")
            }}
            _hover={{ bg:"gray.100"}}  // underline é para efeito
            px="4"
            py="2"
            borderRadius={5}
            bg={asPath === "/entradas" ? "gray.200" : ""}
            > 
                    <Text fontSize="md" fontWeight="medium" color="gray.500">
                        Calças
                    </Text>
            </ChakraLink>
            <ChakraLink
             onClick={() => {
                router.push("/saidas")
            }}
            _hover={{ bg:"gray.100"}}  // underline é para efeito
            px="4"
            py="2"
            borderRadius={5}
            bg={asPath === "/saidas" ? "gray.200" : ""}
            >
                    <Text fontSize="md" fontWeight="medium" color="gray.500">
                        Moletons
                    </Text>
            </ChakraLink>
        </Stack>
    </Stack>
 </Stack>
  );
};

export default SidebarNav