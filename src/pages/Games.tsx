import GameCard from "@/components/GameCard";
import Navbar from "@/components/Navbar";
import results from "@/data/muckGames";
import {
  Box,
  Button,
  Card,
  Flex,
  Grid,
  Input,
  InputGroup,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { LuSearch } from "react-icons/lu";

const Games = () => {
  const [value, setValue] = useState("");

  return (
    <VStack bg={"gray.100"}>
      <Navbar />
      <Box pt={"80px"} w={{ base: "95%", md: "85%" }} minH={"100vh"}>
        <Box m={"auto"}>
          <Flex>
            <InputGroup flex="1" startElement={<LuSearch />}>
              <Input
                placeholder="Search contacts"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                bg={"white"}
              />
            </InputGroup>
          </Flex>
          <Grid
            mt={"10px"}
            templateRows="repeat(5, 1fr)"
            templateColumns="repeat(4, 1fr)"
            gap={4}
          >
            {results.map(
              (x, i) =>
                x.name.toLowerCase().includes(value.toLowerCase()) && (
                  <GameCard
                    image={x.background_image}
                    name={x.name}
                    rating={x.rating}
                    key={i}
                  />
                ),
            )}
          </Grid>
        </Box>
      </Box>
    </VStack>
  );
};
export default Games;
