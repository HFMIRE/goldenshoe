import React from "react";
import { Box } from "@chakra-ui/react";
import NavBar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
const Layout = ({ children }) => {
  return (
    <Box>
      <NavBar />
      {children}
      <Footer />
    </Box>
  );
};

export default Layout;
