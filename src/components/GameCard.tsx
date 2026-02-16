import { Button, Card, Image, Text } from "@chakra-ui/react";

const GameCard = ({
  image,
  name,
  rating,
}: {
  image: string;
  name: string;
  rating: number;
}) => {
  return (
    <Card.Root maxW="sm" bg={"white"} color={"black"}>
      <Image src={`${image}`} h={"1/3"} alt={name + " image"} />
      <Card.Body
        display={"flex"}
        flexDir={"column"}
        justifyContent={"space-between"}
      >
        <Card.Title fontSize={"md"}>{name}</Card.Title>
        <Text textStyle="xl" fontWeight="medium" letterSpacing="tight" mt="2">
          Rating: {`${rating}`}
        </Text>
      </Card.Body>
      <Card.Footer gap="2">
        <Button colorPalette={"orange"} variant="solid">
          see details
        </Button>
      </Card.Footer>
    </Card.Root>
  );
};
export default GameCard;
