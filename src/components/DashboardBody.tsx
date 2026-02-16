import {
  Box,
  Button,
  Flex,
  Image,
  useStatStyles,
  VStack,
} from "@chakra-ui/react";
import phoneImg from "../assets/Img/phone_image.webp";
import { getCurrentUser } from "@/services/userServices";
import { useEffect, useState } from "react";
const DashboardBody = () => {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const current = getCurrentUser();
    console.log(current);
  }, []);
  return (
    <Box w={{ base: "95%", md: "85%" }} color={"black"} zIndex={0}>
      <Flex
        flexDir={{ base: "column", md: "row" }}
        alignItems={"center"}
        minH="120vh"
        gap={{ base: "100px", md: "0" }}
      >
        <VStack w={{ base: "full", md: "1/2" }}>
          <Box
            fontSize={"5xl"}
            fontWeight={"bold"}
            textAlign={"left"}
            w={"100%"}
          >
            One Smartcard,
            <br /> Flexible Benefits
          </Box>
          <Box color={"gray.500"} w={"full"}>
            Offer your team personalized benefits, boost satisfaction, <br />
            and take advantage of tax benefits for your business.
          </Box>
          <Flex
            mr="auto"
            gap="10px"
            flexDir={{ base: "column", md: "row" }}
            w={"full"}
          >
            <Button colorPalette="orange" variant="solid" color="white">
              Schedule a call
            </Button>
            <Button borderWidth="2px" borderColor="gray.300">
              Get info package
            </Button>
          </Flex>
        </VStack>
        <Flex
          w={{ base: "full", md: "1/2" }}
          justifyContent={{ base: "center", md: "right" }}
          alignItems={"center"}
          h={"full"}
        >
          <Box position="relative" w="fit-content">
            {/* Background shape */}
            <Box
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              w="420px"
              h="420px"
              bg="orange.100"
              borderRadius="full"
              opacity={0.6}
              zIndex={1}
            />
            <Image
              src={phoneImg}
              height={"80vh"}
              zIndex={2}
              position={"relative"}
            />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};
export default DashboardBody;
