import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Box bg={"white"} color={"black"}>
      <Outlet />
    </Box>
  );
};
export default Layout;
