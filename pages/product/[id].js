import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import ProductPage from "../../components/ProductPage";
import { useGetProducts } from "../../hooks/useRequest";
import { useState } from "react";
const defaultCart = {
  products: {},
};
export default function Product() {
  const router = useRouter();
  const { id } = router.query;
  const url = `/api/product/${id}`;
  const { data: product, error } = useGetProducts(url);
  const { data } = product || [];

  return (
    <Box>
      <Layout>
        <Box p={5} mb={5}>
        {product && data && (
        <ProductPage product={product} error={error}
        //  addToCart={addToCart}
          />
      )}
        </Box>
      </Layout>
    </Box>
  );
}
