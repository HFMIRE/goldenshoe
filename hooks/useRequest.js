import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export const useGetProducts = (url) => {
  const { data, error } = useSWR(url, fetcher);

  return { data, error };
};
