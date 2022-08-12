import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  Button,
  Icon,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Select,
  Box
} from "@chakra-ui/react";
import AccordionComp from "./ui/AccordionComp";

const CircleIcon = (props) => (
  <Icon viewBox="0 0 200 200" {...props}>
    <path
      fill="currentColor"
      d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
    />
  </Icon>
);

export default function ProductPage({ product }) {
  const { data } = product;
  return (
    <Container maxW={"5xl"} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={20}>
        <Flex>
          <Image
            rounded={"md"}
            alt={product.name}
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
          {
            data.color === "multi" ? 
            <Box  bgGradient='linear(to-r, green.200, pink.500)'  border={'2px'} borderRadius='25px' boxSize={9}/>
            : 
            <Box borderColor='gray.200' border={'2px'} borderRadius='25px' boxSize={9}>
            <CircleIcon boxSize={8} color={data.color}/>
            </Box>
          }
    
          <Select placeholder="Select size" p={1}>
            {data &&
              data.size?.map((s, idx) => {
                console.log(s);
                return <option value={s} key={idx}>{s}</option>;
              })}
          </Select>
          <Button colorScheme="blue" p={3}>Add to cart</Button>
          <AccordionComp/>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
