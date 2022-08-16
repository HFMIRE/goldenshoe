import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import Card from "../components/ui/Card";

const ProductList = ({ product }) => {
  return (
    <Box>
      <SimpleGrid
        columns={{ base: 1, sm: 2, lg: 3, xl: 4 }}
        mx={25}
        spacing={5}
        mt={10}
        p={5}
      >
        {product &&
          product?.map((product, idx) => {
            return <Card product={product} key={idx} />;
          })}
      </SimpleGrid>
    </Box>
  );
};

export default ProductList;
