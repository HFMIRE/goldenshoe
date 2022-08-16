import { Container } from "@chakra-ui/react";

import AlertMsg from "./ui/AlertMsg";
import ProductDisplay from "./ui/ProductDisplay";

const cartobject = {
  productId: "",
  quantity: 0,
  size: "",
};
export default function ProductPage({ data, error, id }) {
  console.log("data", data);
  if (error) {
    <AlertMsg />;
  }

  return (
    <Container maxW={"5xl"} py={12}>
      <ProductDisplay data={data} cartobject={cartobject} id={id} />
    </Container>
  );
}
