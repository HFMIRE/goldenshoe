import ProductList from "../components/ProductList";
import AlertMsg from "../components/ui/AlertMsg";
import fetcher from "../libs/fetcher";
import useSWR from "swr";

const URL = "https://goldenshoe.vercel.app/api/product";
const AllProducts = ({ fallbackData }) => {
  const { data, error } = useSWR(URL, fetcher, { fallbackData });

  if (error) {
    <AlertMsg />;
  }
  if (!data) {
    <div>Loading....</div>;
  }
  return <ProductList product={data.data} />;
};
export default AllProducts;

export async function getServerSideProps() {
  const data = await fetcher(URL);
  return { props: { fallbackData: data } };
}
