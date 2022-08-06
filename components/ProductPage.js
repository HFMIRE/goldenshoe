import {
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Box,
  Button,
} from "@chakra-ui/react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import AccordianComp from "./ui/AccordianComp";
import { useState } from "react";
import { useUser } from "@auth0/nextjs-auth0";

const defaultCart = {
  products: {},
};

const ProductPage = ({ product, error }) => {
  // const { addToCart } = useCart();
  const { data } = product;
  const id = data._id;
  const { user } = useUser();
  const [qty, setQty] = useState(0);
  const [cart, updateCart] = useState(defaultCart);
  // console.log("Data", data)
  const cartProducts = [];

  console.log("cartProducts", cartProducts);
  console.log("cart", cart);
  function addToCart({ id }) {
    updateCart((prev) => {
      let cart = { ...prev };
      console.log(cart.products[id]);
      if (cart.products[id]) {
      } else {
        console.log(id);
        let newCartProduct = {
          id: id,
          quantity: 1,
          pricePerUnit: data.price,
        };
        cartProducts.push(newCartProduct);
      }
    });
  }

  if (error) {
    <Alert status="error">
      <AlertIcon />
      <AlertTitle>Sorry</AlertTitle>
      <AlertDescription>This page is unavailable</AlertDescription>
    </Alert>;
  }

  return (
    <Stack minH={"80vh"} direction={{ base: "column", md: "row" }} mr={50}>
      <Flex p={4} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={5} w={"full"} maxW={"lg"}>
          <Heading
            fontWeight={400}
            fontSize={{ base: "2xl", sm: "3xl", md: "5xl" }}
            color="
              orange.100"
            lineHeight={"110%"}
          >
            {data.name}
          </Heading>
          <Text fontSize={{ base: "sm", lg: "md" }} color={"brand.100"} p={3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia,molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi
            repudiandae consequuntur voluptatum laborum.
          </Text>
          <AccordianComp allergy={data.allergies} dietary={data.dietary} />
          <Box alignProducts={"baseline"}>
            <Box p={3}>
              <Button
                p={5}
                rounded={"5px"}
                bg={"orange.500"}
                color={"orange.50"}
                _hover={{
                  bg: "orange.300",
                }}
                onClick={() => {
                  addToCart({ id });
                }}
              >
                Add to cart
              </Button>
            </Box>
          </Box>
        </Stack>
      </Flex>
      <Flex flex={0.6}>
        <Image
          alt={" product Image"}
          objectFit={"scale-down"}
          src={data.image}
        />
      </Flex>
    </Stack>
  );
};

export default ProductPage;
