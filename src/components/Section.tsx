import { Flex, Text, Img, Button, Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import imagemLoja from "../../public/loja.png";
import { useRouter } from "next/router";

function Section() {
  const router = useRouter();

  return (
    <Flex
      flexWrap="wrap"
      maxW={1120}
      align="center"
      w="100%"
      mx="auto" // margin horizontal
      px="2" //padding nas laterais
      py="2" //padding encima e baixo -8px
    >
      <Flex direction="column">
        <Text fontSize="43px" color="gray.700">
          FRSSTORE
        </Text>
        <Text fontSize="15px" color="gray.600">
          Nossa loja online apresenta uma ampla gama de produtos{" "}
        </Text>
        <Text fontSize="15px" color="gray.600">
          para atender a todos os gostos e necessidades.{" "}
        </Text>
        <Box
          as="button"
          width="200px"
          height="34px"
          px="10px"
          borderRadius="2px"
          fontSize="14px"
          fontWeight="semibold"
          bg="gray.600"
          color="white"
          _hover={{ bg: "gray.500" }}
          onClick={() => {
            router.push("/product");
          }}
        >
          Ver Produtos
        </Box>
      </Flex>
      <Img src="/loja.png" alt="Minha Imagem" h="500px" ml={{ lg: "150px" }} />
    </Flex>
  );
}

export default Section;
