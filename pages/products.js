import Layout from "../components/Layout";
import ProductList from "../components/ProductList";
const allProducts = () => {
  // console.log(products);
  return (
    <Layout>
      <ProductList />
    </Layout>
  );
};
// export async function getStaticProps() {
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//   const res = await fetch("/api/product");
//   const products = await res.json();

//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       products,
//     },
//   };
// }
export default allProducts;
