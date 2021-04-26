import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Mariele Ribeiro</Text>
        <Text color="gray.300" fontSize="small">
          mariele_rbr@hotmail.com
        </Text>
      </Box>
      <Avatar
        size="md"
        name="Mariele Ribeiro"
        src="https://github.com/marieleribeiro.png"
      />
    </Flex>
  );
}
