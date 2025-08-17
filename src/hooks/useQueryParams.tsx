import { useRouter, useSearchParams } from "next/navigation";

const useQueryParams = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const getParam = (key) => {
    return searchParams.get(key);
  };

  const setParam = (key, value) => {
    const params = new URLSearchParams(window.location.search);
    params.set(key, value);
    router.push(`?${params.toString()}`, { scroll: false});
  };

  const removeParam = (key) => {
    const params = new URLSearchParams(window.location.search);
    params.delete(key);
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return { getParam, setParam, removeParam };
};

export default useQueryParams;
