import {
  Box,
  Flex,
  Heading,
  HStack,
  Text,
  Link,
  Stack,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";
import CartItem from "./ui/CartItem";
import NextLink from "next/link";
import { CartOrderSummary } from "./ui/CartOrderSummary";
import { useSelector, useDispatch } from "react-redux";

const CartLayout = () => {
  const cart = useSelector((state) => state.cart);
  console.log("cart", cart);
  return (
    <Box
      maxW={{ base: "3xl", lg: "7xl" }}
      mx="auto"
      px={{ base: "4", md: "8", lg: "12" }}
      py={{ base: "6", md: "8", lg: "12" }}
    >
      {cart.length === 0 ? (
        <HStack mt="6" fontWeight="semibold">
          <Text fontSize={"md"}>Your Cart is Empty!</Text>
          <p>or</p>
          <NextLink href="/products" passHref>
            <Link color={mode("purple.500", "purple.200")}>
              Continue shopping
            </Link>
          </NextLink>
        </HStack>
      ) : (
        <Stack
          direction={{ base: "column", lg: "row" }}
          align={{ lg: "flex-start" }}
          spacing={{ base: "8", md: "16" }}
        >
          <Stack spacing={{ base: "8", md: "10" }} flex="2">
            <Heading fontSize="2xl" fontWeight="extrabold">
              Shopping Cart (3 items)
            </Heading>

            <Stack spacing="6">
              {cart.map((item, idx) => (
                <CartItem key={idx} item={item} />
              ))}
            </Stack>
          </Stack>

          <Flex direction="column" align="center" flex="1">
            <CartOrderSummary />
            <HStack mt="6" fontWeight="semibold">
              <p>or</p>
              <NextLink href="/products" passHref>
                <Link color={mode("purple.500", "purple.200")}>
                  Continue shopping
                </Link>
              </NextLink>
            </HStack>
          </Flex>
        </Stack>
      )}
    </Box>
  );
};

export default CartLayout;
