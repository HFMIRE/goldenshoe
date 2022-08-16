import { Box, Stack, Button, Text, IconButton } from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { useState } from "react";
const Counter = (props) => {
  const [count, setCount] = useState(0);

  const obj = {
    productId: "hey",
    qty: count,
  };

  return (
    <Box alignProducts={"baseline"}>
      <Stack direction={{ base: "column", md: "row" }} spacing={4} p={3}>
        <IconButton
          icon={<AddIcon />}
          onClick={() => {
            setCount(count + 1);
          }}
        />
        <Box color="white">{count}</Box>
        <IconButton
          icon={<MinusIcon />}
          onClick={() => {
            setCount(count - 1);
          }}
        />
      </Stack>
      <Box p={3}>
        <Button
          p={5}
          rounded={"5px"}
          bg={"purple.500"}
          color={"purple.50"}
          _hover={{
            bg: "purple.300",
          }}
        >
          Add to cart
        </Button>
      </Box>
    </Box>
  );
};

export default Counter;
