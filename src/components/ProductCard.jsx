import { useEffect } from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  useEffect(() => {
    console.log(product);
  });

  return (
    <div className="bg-gray-900 rounded-xl shadow-2xl hover:transform-content hover:scale-105 transition-transform duration-250">
      <Link
        to={"/product/" + product._id}
        className="flex flex-col items-center text-center"
      >
        <img
          src={product.image}
          alt={product.title}
          className="w-full  h-[350px] object-contain rounded-t-xl p-5 mb-4 bg-gray-800"
        />
        <h2 className="text-emerald-400 px-5 font-extrabold text-lg mb-3 truncate w-full">
          {product.title}
        </h2>
        <div className="flex flex-col items-center gap-1">
          <p className="text-emerald-400 font-bold text-lg">
            {"$" + product.price}
          </p>
          <p className="text-gray-300 text-sm">
            {"Rating: " + product.rating?.rate || 0}
          </p>
          <p className="text-gray-300 text-sm mb-5">
            {"Reseñas: " + product.rating?.count || 0}
          </p>
        </div>
      </Link>
    </div>
  );
}
export default ProductCard;
