import Layout from "../components/Layout";
import { server } from "../config";
import ProductList from "../components/ProductList";
import AlertMsg from "../components/ui/AlertMsg";
const allProducts = ({ products }) => {
  if (!products.success) {
    <AlertMsg />;
  }
  return (
    <Layout>
      <ProductList product={products.data} />
    </Layout>
  );
};
export default allProducts;
export async function getStaticProps() {
  const res = await fetch(`${server}/api/product`);
  const products = await res.json();
  return {
    props: {
      products,
    },
  };
}
