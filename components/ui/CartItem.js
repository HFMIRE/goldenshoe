import {
  CloseButton,
  Flex,
  HStack,
  Text,
  Select,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import * as React from "react";
import { PriceTag } from "./PriceTag";
import { useDispatch } from "react-redux";
import { CartProductMeta } from "./CartProductMeta";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../../redux/cart.slice";
const QuantitySelect = (props) => {
  return (
    <Select
      maxW="64px"
      aria-label="Select quantity"
      focusBorderColor={useColorModeValue("purple.500", "purple.200")}
      {...props}
    >
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </Select>
  );
};

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
        width="full"
        justify="space-between"
        display={{ base: "none", md: "flex" }}
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
        </HStack>

        <PriceTag
          price={parseInt(item.price.$numberDecimal)}
          currency={"GBP"}
        />

        <CloseButton
          aria-label={`Delete ${item.name} from cart`}
          onChange={() => dispatch(removeFromCart(item._id))}
        />
      </Flex>
    </Flex>
  );
};

export default CartItem;
