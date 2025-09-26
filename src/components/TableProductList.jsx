import { Check, Eye, Trash, View, EyeClosed, Edit } from "lucide-react";

import useProducts from "../hooks/useProducts";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProduct } from "../api/product";
import { useSearchParams } from "react-router-dom";

function TableProductList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const p = Number(searchParams.get("p")) || 1;
  const { data: products, isLoading, isError, error } = useProducts(null, p);
  console.log(products);

  const queryClient = useQueryClient();

  const deleteProductMutation = useMutation({
    mutationFn: (id) => {
      console.log("Intentando borrar:", id);
      return deleteProduct(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
    },
  });

  function handlePagination(newPage) {
    if (newPage > 0) {
      setSearchParams({ p: newPage });
    }
  }

  if (isLoading) return <p>Cargando...</p>;
  if (isError) return <p>Error: {error.message}</p>;
  return (
    <div className="w-full max-w-7xl px-5 mx-auto overflow-x-auto">
      <table className="min-w-full border border-gray-300 rounded-lg text-sm">
        <thead className="bg-gray-200 text-gray-700">
          <tr>
            <th className="px-4 py-2 text-left">Product</th>
            <th className="px-4 py-2 text-left">Price</th>
            <th className="px-4 py-2 text-left">Category</th>
            <th className="px-4 py-2 text-left">State</th>
            <th className="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 text-gray-200">
          {products.products?.map((product) => (
            <tr
              key={product?._id}
              className="hover:bg-emerald-400 hover:text-gray-700 transition"
            >
              <td className="px-4 py-2">{product?.title}</td>
              <td className="px-4 py-2">${product?.price}</td>
              <td className="px-4 py-2">{product?.category.name}</td>
              <td className="px-4 py-2">
                <button className="p-1 rounded-full bg-green-100 text-green-600 hover:bg-green-200 transform hover:scale-110 transition-transform duration-150">
                  <Check size={16} />
                </button>
              </td>
              <td className="px-4 py-2 space-x-2">
                <button
                  className="p-1 rounded-full bg-red-100 text-red-600 hover:bg-red-200 transform hover:scale-110 transition-transform duration-150"
                  onClick={() => deleteProductMutation.mutate(product._id)}
                >
                  <Trash size={16} />
                </button>
                <button className="p-1 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transform hover:scale-110 transition-transform duration-150">
                  <Eye size={16} />
                </button>
                <button className="p-1 rounded-full bg-yellow-100 text-yellow-600 hover:bg-yellow-200 transform hover:scale-110 transition-transform duration-150">
                  <Edit size={16} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="w-full flex items-center justify-center gap-3 text-white">
        <button
          onClick={() => handlePagination(p - 1)}
          className="hover:text-emerald-800 disabled:text-gray-500 "
          disabled={p === 1}
        >
          {p - 1}
        </button>
        <button className=" text-emerald-400 ">{products.page}</button>
        <button
          onClick={() => handlePagination(p + 1)}
          className="hover:text-emerald-800 disabled:text-gray-500 "
          disabled={p >= products.maxPage}
        >
          {p + 1}
        </button>
      </div>
      <div className="text-center text-white mb-2">
        <p>Total: {products.totalDocuments}</p>
      </div>
    </div>
  );
}
export default TableProductList;
