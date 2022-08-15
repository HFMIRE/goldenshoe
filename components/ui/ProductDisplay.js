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
  Box,
Icon
} from "@chakra-ui/react";
import { useState } from "react";
import AccordionComp from "./AccordionComp";
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
const ProductDisplay = ({data, cartobject, id}) => {
  const [size, setSize] = useState();
  const [order, setOrder] = useContext(OrderContext)
  function submitProduct() {
    cartobject.productId = id;
    cartobject.quantity = 1;
    cartobject.size = size;
    return cartobject;
  }
  if (cartobject.productId.length >= 4) {
    window.localStorage.setItem("cartorder", JSON.stringify(cartobject));
    setOrder({
        ...order, 
        product: [...order.product, cartObject]
  })
}


  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={20}>
      <Flex>
        <Image
          rounded={"md"}
          alt={data.name}
          src={data.image}
          objectFit={""}
        />
      </Flex>
      <Stack spacing={4}>
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Products</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">{data.name}</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Heading>{data.name}</Heading>
        <Text color={"gray.500"} fontSize={"lg"}>
          {data.description}
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
        <Button colorScheme="purple" p={3} onClick={submitProduct}>
          Add to cart
        </Button>
        <AccordionComp />
      </Stack>
    </SimpleGrid>
  );
};

export default ProductDisplay;
