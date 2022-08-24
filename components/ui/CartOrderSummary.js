import {
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import NextLink from "next/link";
import * as React from "react";
import { FaArrowRight } from "react-icons/fa";
import { formatPrice } from "./PriceTag";

const OrderSummaryItem = (props) => {
  const { label, value, children } = props;
  return (
    <Flex justify="space-between" fontSize="sm">
      <Text fontWeight="medium" color={mode("gray.600", "gray.400")}>
        {label}
      </Text>
      {value ? <Text fontWeight="medium">{value}</Text> : children}
    </Flex>
  );
};

export const CartOrderSummary = () => {
  return (
    <Stack spacing="8" borderWidth="1px" rounded="lg" padding="8" width="full">
      <Heading size="md">Order Summary</Heading>

      <Stack spacing="6">
        <OrderSummaryItem label="Subtotal" value={formatPrice(597)} />
        <OrderSummaryItem label="Delivery Fee">
          <NextLink href="#" textDecor="underline">
            Free
          </NextLink>
        </OrderSummaryItem>
        <OrderSummaryItem label="Coupon Code">
          <NextLink href="#" textDecor="underline">
            Add coupon code
          </NextLink>
        </OrderSummaryItem>
        <Flex justify="space-between">
          <Text fontSize="lg" fontWeight="semibold">
            Total
          </Text>
          <Text fontSize="xl" fontWeight="extrabold">
            {formatPrice(597)}
          </Text>
        </Flex>
      </Stack>
      <Button
        colorScheme="purple"
        size="lg"
        fontSize="md"
        rightIcon={<FaArrowRight />}
      >
        Checkout
      </Button>
    </Stack>
  );
};
