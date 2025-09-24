import useProducts from "../hooks/useProducts";
import ProductList from "../components/ProductList";
import { useNavigate } from "react-router-dom";

function Home() {
  const { data: products, isLoading, isError, error } = useProducts();

  const navigate = useNavigate();

  const handleClick = (url) => {
    navigate(url);
  };

  return (
    <div className="bg-gray-700 min-h-screen flex  flex-col justify-center items-center pt-22">
      <div className="grid grid-cols-2 gap-5 w-full max-w-7xl px-5">
        {/* Promo Men's Clothing */}
        <div className="bg-gray-800 py-5 sm:py-10 text-center rounded-md text-white px-2">
          <h2 className="text-2xl font-bold mb-3">Men's Clothing</h2>
          <p className="text-gray-300 mb-5 ">
            Hasta <span className="font-bold text-yellow-400">40% OFF</span> en
            moda masculina
          </p>
          <span className="block text-3xl font-extrabold text-yellow-400 mb-5 ">
            Desde $1999
          </span>
          <button
            className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold px-2 md:px-5 py-2 rounded-md"
            onClick={() => handleClick("/category/mens-clothing")}
          >
            Comprar ahora
          </button>
        </div>

        {/* Promo Electronics */}
        <div className="bg-gray-800 py-5 sm:py-10 text-center rounded-md text-white px-2">
          <h2 className="text-2xl font-bold mb-3">Electronics</h2>
          <p className="text-gray-300 mb-5">
            Descuentos de hasta{" "}
            <span className="font-bold text-green-400">30%</span> en tecnología
          </p>
          <span className="block  font-extrabold text-green-400 mb-5 text-3xl">
            Desde $4999
          </span>
          <button
            className="bg-green-500 hover:bg-green-600 text-gray-900 font-semibold px-2 sm:px-5 py-2 rounded-md"
            onClick={() => handleClick("/category/electronics")}
          >
            Comprar ahora
          </button>
        </div>
      </div>

      <h1 className="text-emerald-400 text-center text-5xl font-bold"></h1>
      {isLoading ? (
        <p className="text-gray-100 text-4xl">Cargando...</p>
      ) : (
        <ProductList products={products} />
      )}

      {error && <p>{JSON.stringify(error)}</p>}
    </div>
  );
}

export default Home;
