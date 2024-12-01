import { Box, Container, HStack, Image, Text } from "@chakra-ui/react";

export const Navbar = () => {
  return (
    <Box
      px={0}
      position={"sticky"}
      top={0}
      zIndex={10}
      py={4}
      h={"auto"}
      w={"full"}
      bg={"#f7f7f7"}
    >
      <Container
        w="full"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems={"center"}
        maxW={"container.xl"}
      >
        <HStack flex={1} justifyContent={"start"}>
          <Box boxSize={'60px'}>
            <Image src="orange-bus.png"/>
          </Box>
          <Text fontSize={28} fontWeight={800}>
            PubliCity
          </Text>
        </HStack>

        <HStack flex={1} spacing={4} justifyContent={"end"}>
          <Text fontSize={28} fontWeight={600}>
            Hello Username!
          </Text>
        </HStack>
      </Container>
    </Box>
  );
};
