import { useQuery } from "@tanstack/react-query";
import { getProducts, getProductByID } from "../api/product.js";

function useProducts(id = null) {
  return useQuery({
    queryKey: id ? ["product", id] : ["products"],
    queryFn: () => (id ? getProductByID(id) : getProducts()),
  });
}

export default useProducts;
