import React from "react";
import {
  Link as ChakraLink,
  Avatar,
  Flex,
  HStack,
  Icon,
  IconButton,
  Text,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";

function header() {
  const router = useRouter();

  const { asPath } = useRouter();

  return (
    <Flex
      as="header"
      w="100%"
      maxW={1120} //1120
      h="20" //multiplica por 4- 80px
      mx="auto" // margin horizontal
      px="2" //padding nas laterais
      py="2" //padding encima e baixo -8px
      align="center"
      boxShadow=" 0 1px 0 #ccc" //embaixo                  hstack ja deixa organizado spacing="0"
      color="gray.500"
      fontWeight="bold"
    >
      <Text fontSize={{ base: "sm", md: "lg" }}>FRSSTORE</Text>
      <Flex ml="auto">
        <HStack spacing={{ base: "5", sm: "4", md: "7", lg: "7" }}>
          <ChakraLink
            onClick={() => {
              router.push("/product");
            }}
            _hover={{ bg: "gray.100" }} // underline é para efeito
            px="4"
            py="2"
            borderRadius={5}
            bg={asPath === "/saldo" ? "gray.200" : ""}
          >
            <Text fontSize={{ base: "15px", md: "lg", lg: "xl" }}>
              Produtos{" "}
            </Text>
          </ChakraLink>

          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              <Avatar size="sm"></Avatar>
            </MenuButton>
            <MenuList>
              <MenuItem fontSize="lg">Conta</MenuItem>
              <MenuItem fontSize="lg">Sobre Nós</MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </Flex>
    </Flex>
  );
}

export default header;
