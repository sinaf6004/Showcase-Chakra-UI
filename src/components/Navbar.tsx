import {
  Box,
  Flex,
  HStack,
  Image,
  Menu,
  useBreakpointValue,
} from "@chakra-ui/react";
import logo from "../assets/Img/image.png";
import sun from "../assets/Icon/sunIcon.svg";
import ham from "../assets/Icon/hamIcon.svg";
import CustomMenu from "./Menu";
import "../data/muckGames";
const Navbar = () => {
  const horizontalSizes = { base: "20px", md: "70px" };
  const horizontalSizesMove = { base: "-20px", md: "-70px" };
  return (
    <Box
      position={"fixed"}
      borderWidth={"1px"}
      borderColor={"gray.200"}
      borderTopWidth={"0"}
      w={{ base: "95%", md: "85%" }}
      h={"70px"}
      fontSize="11px"
      zIndex={1}
    >
      {/* <Box position={"relative"}> */}
      <Box
        position={"absolute"}
        left={"-1px"}
        top={"0"}
        bottom={"-120px"}
        width={"1px"}
        bgGradient="to-b"
        gradientFrom="gray.200"
        gradientTo="transparent"
      />
      <Box
        position={"absolute"}
        right={"-1px"}
        top={"0"}
        bottom={"-120px"}
        width={"1px"}
        bgGradient="to-b"
        gradientFrom="gray.200"
        gradientTo="transparent"
      />
      <Box
        position={"absolute"}
        bottom={"-1px"}
        // right={horizontalSizesMove}
        // width={horizontalSizes}
        right="calc((100vw - 100%) / -2)"
        width="calc((100vw - 100%) / 2)"
        height={"1px"}
        // bgGradient="to-r"
        // gradientFrom="gray.200"
        // gradientTo="transparent"
        bg={"gray.200"}
      />
      <Box
        position={"absolute"}
        bottom={"-1px"}
        // left={horizontalSizesMove}
        // width={horizontalSizes}
        left="calc((100vw - 100%) / -2)"
        width="calc((100vw - 100%) / 2)"
        height={"1px"}
        bg={"gray.200"}
        // bgGradient="to-l"
        // gradientFrom="gray.200"
        // gradientTo="transparent"
      />
      <Flex
        px={{ base: "10px", md: "20px" }}
        justify="space-between"
        alignItems="center"
        h="full"
        backgroundColor="white"
      >
        <Image height="1/2" src={logo} />
        <HStack
          h={"full"}
          color={"gray.500"}
          fontSize={"16px"}
          display={{ base: "none", md: "flex" }}
          gap={"20px"}
        >
          {/* <Box
            cursor={"pointer"}
            h={"full"}
            borderWidth={"1px"}
            borderColor={"transparent"}
          >
            <CustomMenu
              name="Users"
              items={["Login for Employers", "Login for Employees"]}
              type={3}
            />
          </Box> */}
          <Box
            cursor={"pointer"}
            h={"full"}
            borderWidth={"1px"}
            borderColor={"transparent"}
          >
            <CustomMenu name="Products" type={2} />
          </Box>
        </HStack>
        <HStack color="black" gap="0" height="1/2" h="1/2" fontWeight={"bold"}>
          <Box borderWidth="1px" borderColor="#adb5bd" h="full" px={2}>
            <Flex justifyContent={"center"} alignItems={"center"} h="full">
              <Image src={sun} />
            </Flex>
          </Box>
          <Box
            borderWidth="1px"
            borderColor="#adb5bd"
            borderRightWidth={"0"}
            h="full"
            px={2}
            py={"auto"}
          >
            <Flex
              justifyContent={"center"}
              alignItems={"center"}
              h="full"
              color={"gray.700"}
              fontWeight={"semibold"}
              fontSize={"13px"}
            >
              {useBreakpointValue({
                base: "Log In",
                md: (
                  <CustomMenu
                    name="Sign in"
                    items={["Login for Employers", "Login for Employees"]}
                    type={1}
                  />
                ),
              })}
            </Flex>
          </Box>
          <Box
            borderWidth="1px"
            borderColor={{ base: "#adb5bd", md: "orange.500" }}
            bg={{ md: "orange.500" }}
            color={{ md: "white" }}
            h="full"
            px={2}
            rounded={"0"}
          >
            <Flex justifyContent={"center"} alignItems={"center"} h="full">
              {useBreakpointValue({
                base: <Image src={ham} />,
                md: "Free Demo",
              })}
            </Flex>
          </Box>
        </HStack>
      </Flex>
      {/* </Box> */}
    </Box>
  );
};
export default Navbar;
