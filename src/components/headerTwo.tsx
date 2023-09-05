import React from "react";
import {
  Link as ChakraLink,
  Avatar,
  Flex,
  HStack,
  Icon,
  IconButton,
  Text,
  useBreakpointValue,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Button,
  background,
} from "@chakra-ui/react";
import { useSidebarContext } from "@/contexts/SidebarContext";
import { FiMenu } from "react-icons/fi";
import { useRouter } from "next/router";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { AiFillHome } from "react-icons/ai";
import { BsCartFill } from "react-icons/bs";

//flex uma div com display flex declarado
function HeaderTwo() {
  const router = useRouter();

  const { asPath } = useRouter();

  //verificação se a tela é mobile ou não  useBreak é dentro do chakra
  const isMobile = useBreakpointValue({
    base: true,
    lg: false,
  });

  const { onOpen } = useSidebarContext();

  return (
    <Flex
      as="header"
      w="100%"
      maxW={1200} //1120
      h="20" //multiplica por 4- 80px
      mx="auto" // margin horizontal
      px="4" //padding nas laterais
      py="4" //padding encima e baixo -8px
      align="center"
      boxShadow=" 0 1px 0 #ccc" //embaixo                  hstack ja deixa organizado spacing="0"
      color="gray.500"
      fontWeight="bold"
    >
      {isMobile && (
        <IconButton
          icon={<Icon as={FiMenu} />}
          onClick={onOpen}
          variant="unstyled"
          fontSize={20}
          mr="1"
          aria-label="Abrir menu"
        ></IconButton>
      )}
      <Text fontSize={{ base: "sm", md: "lg" }}>FRSSTORE</Text>
      <Flex ml="auto">
        <HStack spacing={{ base: "0", sm: "4", md: "7", lg: "7" }}>
          <ChakraLink
            onClick={() => {
              router.push("/");
            }}
            _hover={{ bg: "gray.100" }} // underline é para efeito
            px="4"
            py="2"
            borderRadius={5}
            //bg={asPath === "/" ? "gray.200" : ""}
          >
            <Icon
              as={AiFillHome}
              color="gray.600"
              w={7}
              h={7}
              display={{ base: "none", md: "flex" }}
            />
          </ChakraLink>
          <ChakraLink
            onClick={() => {
              router.push("/product");
            }}
            _hover={{ bg: "gray.100" }} // underline é para efeito
            px="4"
            py="2"
            borderRadius={5}
            //bg={asPath === "/product" ? "gray.200" : ""}
          >
            <Icon as={BsCartFill} color="gray.600" w={7} h={7} />
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

export default HeaderTwo;
