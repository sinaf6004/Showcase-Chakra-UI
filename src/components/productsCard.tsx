import { Box, Card, Image, Text, VStack } from "@chakra-ui/react";
import gameCardImage from "../assets/Img/products_card_image.jpg";
import { Link } from "react-router-dom";
const ProductsCard = () => {
  return (
    <Card.Root
      flexDirection="row"
      overflow="hidden"
      maxW="800px"
      borderRadius="2xl"
    >
      <Box p={6} minW="280px" bg={"white"} color={"black"}>
        <Card.Body p="0">
          <VStack align="start" gap={8}>
            <Box>
              <Text fontSize="sm" fontWeight="bold" color="orange.500" mb={3}>
                Product
              </Text>

              <VStack align="start" gap={2}>
                <Text cursor="pointer" _hover={{ color: "orange.500" }}>
                  <Link to={"/games"}>games</Link>
                </Text>
                <Text cursor="pointer" _hover={{ color: "orange.500" }}>
                  developers
                </Text>
              </VStack>
            </Box>
          </VStack>
        </Card.Body>
      </Box>

      <Box position="relative" w="360px" h="240px">
        <Image src={gameCardImage} objectFit="cover" w="100%" h="100%" />

        <Box
          position="absolute"
          inset="0"
          bg="linear-gradient(to top, rgba(0,0,0,0.7), transparent)"
        />
      </Box>
    </Card.Root>
  );
};
export default ProductsCard;
