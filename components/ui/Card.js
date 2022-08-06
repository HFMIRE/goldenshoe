import { Box, Image, HStack, LinkBox } from "@chakra-ui/react";
import Link from "next/Link";

export default function Card({ product, error }) {
  if (error) {
    <Alert status="error">
      <AlertIcon />
      <AlertTitle>Sorry</AlertTitle>
      <AlertDescription>This page is unavailable</AlertDescription>
    </Alert>;
  }
  return (
    <LinkBox>
      <Link href={`/menu/${product._id}`}>
        <Box
          maxW="xs"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          borderColor={"blackAlpha.100"}
        >
          <Image
            boxSize="300px"
            objectFit="scale-down"
            src={product.image}
            alt="product image"
          />
          <Box>
            <HStack align={"center"}>
              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                noOfLines={1}
                color={"orange.50"}
              >
                {product.name}
              </Box>
              <Box color={"orange.50"}>{product.price}</Box>
            </HStack>
            <Box p="2" color={"brand.100"}>
              {product.description}
            </Box>
          </Box>
        </Box>
      </Link>
    </LinkBox>
  );
}
