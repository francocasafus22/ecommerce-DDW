import { Search } from "lucide-react";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

function ProductList({ products, title, description }) {
  const [textInput, SetTextInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const productsFilter = products.filter((product) =>
      product.title.toLowerCase().includes(textInput.toLowerCase())
    );
    setFilteredProducts(productsFilter);
  }, [products, textInput]);

  function handleInput(e) {
    SetTextInput(e.target.value);
  }

  return (
    <div className="bg-gray-700 min-h-screen px-4 pb-12  pt-17 md:pt-25">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-emerald-400 text-center text-5xl font-bold pt-5">
          {title}
        </h1>
        <p className="text-gray-300 text-center mb-5 text-xl">{description}</p>

        <div className="flex items-center w-full max-w-md mx-auto mb-5 gap-2">
          <Search size={24} className="text-gray-300" />
          <input
            type="text"
            placeholder="Buscar..."
            className="flex-1 bg-gray-800 text-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
            onChange={handleInput}
          />
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard product={product} key={product.id}></ProductCard>
            ))}
          </div>
        ) : (
          <p className="text-center text-2xl font-semibold text-gray-200 py-5">
            No Products Found
          </p>
        )}
      </div>
    </div>
  );
}

export default ProductList;
