import { useRouter } from "next/router";
import fetcher from "../libs/fetcher";
import useSWR from "swr";
import ProductList from "../components/ProductList";
import AlertMsg from "../components/ui/AlertMsg";
export default function Product() {
  const router = useRouter();
  const { slug } = router.query;
  const URL = `/api/product`;

  const { data: product, error } = useSWR(URL, fetcher);
  const { data } = product || [];
  const filteredData = data?.filter((item) => item.category === slug);
  if (error) {
    <AlertMsg />;
  }
  if (!data) {
    <div>Loading....</div>;
  }
  return <ProductList product={filteredData} />;
}
