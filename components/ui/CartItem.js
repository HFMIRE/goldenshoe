import { CloseButton, Flex, HStack, Text, Button } from "@chakra-ui/react";
import * as React from "react";
import { PriceTag } from "./PriceTag";
import { useDispatch } from "react-redux";
import { CartProductMeta } from "./CartProductMeta";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../../redux/cart.slice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      justify="space-between"
      align="center"
    >
      <CartProductMeta
        name={item.name}
        description={item.description}
        image={item.image}
      />
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
        p={5}
      >
        <HStack>
          <Button
            colorScheme="purple"
            onClick={() => dispatch(incrementQuantity(item._id))}
          >
            +
          </Button>

          <Text p={5}>{item.quantity}</Text>

          <Button
            colorScheme="purple"
            onClick={() => dispatch(decrementQuantity(item._id))}
          >
            -
          </Button>
          <PriceTag
            price={parseInt(item.price.$numberDecimal)}
            currency={"GBP"}
          />
          <CloseButton
            aria-label={`Delete ${item.name} from cart`}
            onClick={() => dispatch(removeFromCart(item._id))}
          />
        </HStack>
      </Flex>
    </Flex>
  );
};

export default CartItem;
