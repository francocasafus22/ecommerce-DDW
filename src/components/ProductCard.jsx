import { useEffect } from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  useEffect(() => {
    console.log(product);
  });

  return (
    <div className="bg-gray-900 rounded-lg p-4">
      <Link to={"/product/" + product.id}>
        <h2 className="text-emerald-400 font-bold text-lg mb-2">
          {product.title}
        </h2>

        <img
          src={"https://placehold.co/600x400"}
          alt={product.title}
          className="rounded-lg"
        />

        <div>
          <p className="text-center mt-2 text-emerald-400 font-bold text-lg">
            {"$" + product.price}
          </p>
          <p className="text-gray-200">{"Rating: " + product.rating.rate}</p>
          <p className="text-gray-200">{"Reseñas: " + product.rating.count}</p>
        </div>
      </Link>
    </div>
  );
}
export default ProductCard;
