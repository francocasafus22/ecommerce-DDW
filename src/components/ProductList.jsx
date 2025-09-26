import { Search, ArrowRight, ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";

function ProductList({ products, title, description }) {
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  return (
    <div className={`bg-gray-700 min-h-screen max-w-7xl px-5 pb-12`}>
      <div className="max-w-7xl mx-auto">
        {{ title, description } && (
          <>
            <h1 className="text-emerald-400 text-center text-5xl font-bold ">
              {title}
            </h1>
            <p className="text-gray-300 text-center mb-5 text-xl">
              {description}
            </p>
          </>
        )}

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
