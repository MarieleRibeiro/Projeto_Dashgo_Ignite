import { Flex, Text, Input, Icon } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";

export function Header() {
  return (
    <Flex as="header" w="100%" maxW={1480} h="20" mx="4" px="6" align="center">
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
        dashgo
        <Text as="span" ml="1" color="pink.500">
          .
        </Text>
      </Text>
      <Flex
        as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        maxW={400}
        alignSelf="center"
        color="gray.200"
        position="relative"
        bg="gray.800"
        borderRadius="full"
      >
        <Input
          color="gray.50"
          variant="unstyled" //sem borda e sem background
          px="4"
          mr="4"
          placeholder="Buscar na Plataforma"
          _placeholder={{ color: "gray.400" }}
        />
        <Icon as={RiSearchLine} fontSize={20} />
      </Flex>
    </Flex>
  );
}
// quando eu preciso ter icone e input junto a melhor forma e fazer com que o elemento que
//esta por volta dos dois se pareça com um input para a pessoa clicar.
