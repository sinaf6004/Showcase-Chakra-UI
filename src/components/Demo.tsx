import { Box, Button, HStack, VStack } from "@chakra-ui/react";
import Navbar from "./Navbar";
import DashboardBody from "./DashboardBody";

const Demo = () => {
  return (
    <Box minH="100vh" backgroundColor={"#f8f9fa"}>
      <VStack>
        <Navbar />
        <DashboardBody />
      </VStack>
    </Box>
  );
};
export default Demo;
