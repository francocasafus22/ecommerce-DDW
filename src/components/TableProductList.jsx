import { Check, Eye, Trash, View, EyeClosed, Edit } from "lucide-react";

import useProducts from "../hooks/useProducts";

function TableProductList() {
  const { products, isLoading, error } = useProducts();

  if (isLoading) {
    return (
      <div className="text-gray-100 text-center text-4xl">Cargando...</div>
    );
  }

  if (error) {
    return <div>error: {error}</div>;
  }

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
          {products?.map((product) => (
            <tr
              key={product.id}
              className="hover:bg-emerald-400 hover:text-gray-700 transition"
            >
              <td className="px-4 py-2">{product?.title}</td>
              <td className="px-4 py-2">${product?.price}</td>
              <td className="px-4 py-2">{product?.category}</td>
              <td className="px-4 py-2">
                <button className="p-1 rounded-full bg-green-100 text-green-600 hover:bg-green-200 hover: transform-content hover:scale-110 transition-transform duration-150">
                  <Check size={16} />
                </button>
              </td>
              <td className="px-4 py-2 space-x-2">
                <button className="p-1 rounded-full bg-red-100 text-red-600 hover:bg-red-200 hover: transform-content hover:scale-110 transition-transform duration-150">
                  <Trash size={16} />
                </button>
                <button className="p-1 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 hover: transform-content hover:scale-110 transition-transform duration-150">
                  <Eye size={16} />
                </button>
                <button className="p-1 rounded-full bg-yellow-100 text-yellow-600 hover:bg-yellow-200 hover: transform-content hover:scale-110 transition-transform duration-150">
                  <Edit size={16} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default TableProductList;
