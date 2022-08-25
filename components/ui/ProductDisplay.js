import {
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
  Icon,
  HStack,
} from "@chakra-ui/react";
import { useState } from "react";
import AccordionComp from "./AccordionComp";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cart.slice";
import NextLink from "next/link";
import { ChevronLeftIcon } from "@chakra-ui/icons";
const CircleIcon = (props) => (
  <Icon viewBox="0 0 200 200" {...props}>
    <path
      fill="currentColor"
      d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
    />
  </Icon>
);

const ProductDisplay = ({ data }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [size, setSize] = useState();

  const stripeId = data.stripeId;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={20}>
      <Flex>
        <Image rounded={"md"} alt={data.name} src={data.image} objectFit={""} />
      </Flex>
      <Stack spacing={4}>
        <HStack>
          <NextLink href="/products">
            <ChevronLeftIcon w={6} h={6} color="purple.300" />
          </NextLink>
          <Breadcrumb>
            <BreadcrumbItem>
              <NextLink href="/products">
                <BreadcrumbLink>Products</BreadcrumbLink>
              </NextLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <NextLink href="#">
                <BreadcrumbLink>{data.name}</BreadcrumbLink>
              </NextLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </HStack>

        <Heading>{data.name}</Heading>
        <Text color={"gray.500"} fontSize={"lg"}>
          {data.description}
        </Text>
        <Text color={"purple.500"} fontSize={"lg"} fontWeight={500}>
          £{data.price.$numberDecimal}
        </Text>
        {data.color === "multi" ? (
          <Box
            bgGradient="linear(to-r, green.200, pink.500)"
            border={"2px"}
            borderRadius="25px"
            boxSize={9}
          />
        ) : (
          <Box
            borderColor="gray.200"
            border={"2px"}
            borderRadius="25px"
            boxSize={9}
          >
            <CircleIcon boxSize={8} color={data.color} />
          </Box>
        )}

        {/* <Select
          placeholder="Select size"
          p={1}
          onChange={(event) => {
            setSize(event?.target?.value);
          }}
        >
          {data &&
            data.size?.map((s, idx) => {
              return (
                <option value={s} key={idx}>
                  {s}
                </option>
              );
            })}
        </Select> */}
        <Button
          colorScheme="purple"
          p={3}
          onClick={() => dispatch(addToCart(data))}
        >
          Add to cart
        </Button>
        <AccordionComp />
      </Stack>
    </SimpleGrid>
  );
};

export default ProductDisplay;
