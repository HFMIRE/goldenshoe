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
  Select,
  Input,
  Box,
  Icon,
  HStack,
} from "@chakra-ui/react";
import { useState } from "react";
import AccordionComp from "./AccordionComp";
import { initiateCheckout } from "../../libs/payment";
import { useContext } from "react";
import { OrderContext } from "../../contexts/orderContext";

const CircleIcon = (props) => (
  <Icon viewBox="0 0 200 200" {...props}>
    <path
      fill="currentColor"
      d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
    />
  </Icon>
);
const ProductDisplay = ({ data, cartobject, id }) => {
  const [size, setSize] = useState();
  const [order, setOrder] = useContext(OrderContext);
  const [item, setItem] = useState({
    name: data.name,
    description: data.description,
    image: data.image,
    quantity: 0,
    price: parseInt(data.price.$numberDecimal),
  });
  const changeQuantity = (value) => {
    // Don't allow the quantity less than 0, if the quantity is greater than value entered by user then the user entered quantity is used, else 0
    setItem({ ...item, quantity: Math.max(0, value) });
  };

  const onInputChange = (e) => {
    changeQuantity(parseInt(e.target.value));
  };

  const onQuantityPlus = () => {
    changeQuantity(item.quantity + 1);
  };

  const onQuantityMinus = () => {
    changeQuantity(item.quantity - 1);
  };
  console.log("stripe id", data.stripeId);
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={20}>
      <Flex>
        <Image rounded={"md"} alt={data.name} src={data.image} objectFit={""} />
      </Flex>
      <Stack spacing={4}>
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href="/products">Products</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">{data.name}</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
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

        <Select
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
        </Select>
        <Stack
          direction={["column", "row"]}
          spacing="16px"
          justifyContent={"center"}
          p={3}
          alignItems={"baseline"}
        >
          <Button colorScheme="purple" size="sm" onClick={onQuantityMinus}>
            -
          </Button>
          <Input
            placeholder="quantity"
            htmlSize={3}
            width="auto"
            onChange={onInputChange}
            value={item.quantity}
          />
          <Button colorScheme="purple" size="sm" onClick={onQuantityPlus}>
            +
          </Button>
        </Stack>
        <Button
          colorScheme="purple"
          p={3}
          // {...item.quantity === 0 ? isDisabled: null }

          onClick={() =>
            initiateCheckout({
              lineItems: [
                {
                  price: data.stripeId,
                  quantity: 1,
                },
              ],
            })
          }
        >
          Add to cart
        </Button>
        <AccordionComp />
      </Stack>
    </SimpleGrid>
  );
};

export default ProductDisplay;
