import { useQuery } from "@tanstack/react-query";
import { getProducts, getProductByID } from "../api/product.js";

function useProducts(id = null, p = 1, category = null, search = "") {
  return useQuery({
    queryKey: id ? ["product", id] : ["products", search, category, p],
    queryFn: () => (id ? getProductByID(id) : getProducts(p, category, search)),
  });
}

export default useProducts;
