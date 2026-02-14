import { Box, Card, Image, Text, VStack } from "@chakra-ui/react";
import gameCardImage from "../assets/Img/products_card_image.jpg";
const ProductsCard = () => {
  return (
    <Card.Root
      flexDirection="row"
      overflow="hidden"
      maxW="800px"
      borderRadius="2xl"
    >
      {/* LEFT SIDE CONTENT */}
      <Box p={6} minW="280px" bg={"white"} color={"black"}>
        <Card.Body p="0">
          <VStack align="start" gap={8}>
            {/* Product Section */}
            <Box>
              <Text fontSize="sm" fontWeight="bold" color="orange.500" mb={3}>
                Product
              </Text>

              <VStack align="start" gap={2}>
                <Text cursor="pointer" _hover={{ color: "orange.500" }}>
                  games
                </Text>
                <Text cursor="pointer" _hover={{ color: "orange.500" }}>
                  developers
                </Text>
              </VStack>
            </Box>
          </VStack>
        </Card.Body>
      </Box>

      {/* RIGHT IMAGE SIDE */}
      <Box position="relative" w="360px" h="240px">
        <Image src={gameCardImage} objectFit="cover" w="100%" h="100%" />

        {/* Overlay */}
        <Box
          position="absolute"
          inset="0"
          bg="linear-gradient(to top, rgba(0,0,0,0.7), transparent)"
        />

        {/* Overlay Text */}
        {/* <Box position="absolute" bottom="4" left="4" right="4" color="white">
          <Text fontWeight="bold" fontSize="lg">
            Comparison of reference cards:
          </Text>
          <Text fontWeight="bold" fontSize="lg">
            HelloBonnie sets new standards
          </Text>
        </Box> */}
      </Box>
    </Card.Root>
  );
};
export default ProductsCard;
