import {
  Box,
  Card,
  HStack,
  Image,
  Text,
  Button,
  Flex,
  Link,
  Spacer,
} from "@chakra-ui/react";

import { MdOutlineArrowOutward } from "react-icons/md";
import { ConnectWalletButton } from "./ConnectWalletButton";

export const InfoCard = () => {
  return (
    <Card w={"full"}>

      {/* Row 1:  Headers */}
      <Flex>  
        <Box w='20px'>  {/* Fixed spacing */}
        </Box>
        <Box w='200px' borderWidth='1px' borderColor={"white"}>  {/* Row 1, Column 1 */}
          <HStack alignSelf={{ base: "center", md: "flex-start" }}>
            <Text fontSize={22} fontWeight={700}>
              Balance
            </Text>
          </HStack>
        </Box>
        <Spacer />  {/* Flexible spacing */}
        <Box w='200px' borderWidth='2px' borderColor={"white"}>  {/* Row 1, Column 2 */}
          <HStack alignSelf={{ base: "center", md: "flex-start" }}>
            <Text fontSize={22} fontWeight={700}>
              Tickets
            </Text>
          </HStack>
        </Box>
      </Flex>


      {/* Row 2:  Information */}
      <Flex> 
        <Box w='20px'>  {/* Fixed spacing */}
        </Box>
        <Box w='200px' borderWidth='2px' borderColor={"white"}>  {/* Row 2, Column 1 */}
          <HStack align={{ base: "center", md: "flex-start" }}>
            <Text fontSize={32} fontWeight={600}>
              123
            </Text>
            <Image src="B3TR-Token-250x200.png" h={38} borderRadius={100} />
          </HStack>
        </Box>
        <Spacer />  {/* Flexible spacing */}
        <Box w='200px' borderWidth='2px' borderColor={"white"}>  {/* Row 2, Column 2 */}
        <HStack align={{ base: "center", md: "flex-start" }}>
            <Text fontSize={32} fontWeight={600}>
              1 / 2
            </Text>
          </HStack>
        </Box>
      </Flex>

      {/* Row 3:  Buttons */}
      <Flex> 
        <Box w='20px'>  {/* Fixed spacing */}
        </Box>
        <Box w='200px' borderWidth='2px' borderColor={"white"}>  {/* Row 3, Column 1 */}
          <HStack flex={1} spacing={4} justifyContent={"le"}>
            <ConnectWalletButton />
          </HStack>
        </Box>
        <Spacer />  {/* Flexible spacing */}
        <Box w='200px' borderWidth='0px' borderColor={"white"}> {/* Row 3, Column 2 */}
          <Link isExternal href="https://governance.vebetterdao.org">
            <Button
              rounded={"full"}
              colorScheme="primary"
              size={"md"}
              leftIcon={<MdOutlineArrowOutward />}
              mt={{ base: 0, md: 0 }}
              ml={{ base: 0, md: 0 }}
            >
              Vote for PubliCity
            </Button>
          </Link>
        </Box>        
      </Flex>
    </Card>
  );
};
