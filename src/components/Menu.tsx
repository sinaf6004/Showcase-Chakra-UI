import { Icon, Box, Menu, Portal, Flex } from "@chakra-ui/react";
import { FiChevronDown } from "react-icons/fi";
import { useState } from "react";
import ProductsCard from "./productsCard";

const CustomMenu = ({
  name,
  items,
  type,
}: {
  name: string;
  items?: string[];
  type: 1 | 2 | 3;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Box
      onMouseEnter={() => type != 1 && setOpen(true)}
      onMouseLeave={() => type != 1 && setOpen(false)}
      onClick={() => type == 1 && setOpen(!open)}
      h={"full"}
    >
      <Menu.Root
        open={open}
        onOpenChange={(e) => setOpen(e.open)}
        positioning={type == 1 ? { gutter: 20 } : { gutter: 0 }}
      >
        <Menu.Trigger asChild>
          <Flex
            cursor="pointer"
            display="inline-flex"
            alignItems="center"
            gap="2"
            h={"100%"}
            m={"auto"}
            flexDir={"column"}
            justifyContent={"center"}
          >
            <Flex alignItems={"center"}>
              <Box>{name}</Box>
              <Icon
                as={FiChevronDown}
                transition="transform 0.2s ease"
                transform={open ? "rotate(180deg)" : "rotate(0deg)"}
              />
            </Flex>
          </Flex>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner offset={[0, 48]}>
            <Menu.Content bg={"white"}>
              {type == 1 &&
                items?.map((x) => (
                  <Menu.Item
                    value={x}
                    color={"gray.500"}
                    _hover={{ bg: "gray.200" }}
                  >
                    {x}
                  </Menu.Item>
                ))}
              {type == 2 && <ProductsCard />}
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </Box>
  );
};

export default CustomMenu;
