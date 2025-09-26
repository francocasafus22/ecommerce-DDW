import useProducts from "../hooks/useProducts";
import ProductList from "../components/ProductList";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";

function Home() {
  const [searchParams, setSearchParams] = useSearchParams();

  const p = Number(searchParams.get("p")) || 1;
  const search = searchParams.get("search") || "";
  const [textInput, setTextInput] = useState(search);
  const {
    data: result,
    isLoading,
    isError,
    error,
  } = useProducts(null, p, null, search);

  const navigate = useNavigate();

  const handleClick = (url) => {
    navigate(url);
  };

  function handlePagination(newPage) {
    if (newPage > 0) {
      setSearchParams({ search, p: newPage });
    }
  }

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchParams({ search: textInput, p: 1 });
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
            className="bg-green-500 hover:bg- green-600 text-gray-900 font-semibold px-2 sm:px-5 py-2 rounded-md"
            onClick={() => handleClick("/category/electronics")}
          >
            Comprar ahora
          </button>
        </div>
      </div>

      <h1 className="text-emerald-400 text-center text-5xl font-bold"></h1>
      <form
        onSubmit={handleSearch}
        className="flex items-center w-full max-w-md mx-auto mb-5 mt-10 px-5 gap-2"
      >
        <Search size={24} className="text-gray-300" />
        <input
          type="text"
          placeholder="Buscar..."
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          className="flex-1 bg-gray-800 text-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
        />
        <button
          type="submit"
          className="bg-emerald-400 px-3 py-2 rounded-md text-gray-900 font-semibold"
        >
          Buscar
        </button>
      </form>
      {isLoading ? (
        <p className="text-gray-100 text-4xl">Cargando...</p>
      ) : (
        <>
          <ProductList products={result.products} />
          <div className="w-full flex items-center justify-center gap-3 text-white">
            <button
              onClick={() => handlePagination(p - 1)}
              className="hover:text-emerald-800 disabled:text-gray-500 "
              disabled={p === 1}
            >
              {p - 1}
            </button>
            <button className=" text-emerald-400 ">{result.page}</button>
            <button
              onClick={() => handlePagination(p + 1)}
              className="hover:text-emerald-800 disabled:text-gray-500 "
              disabled={p >= result.maxPage}
            >
              {p + 1}
            </button>
          </div>
          <div className="text-center text-white mb-2">
            <p>Total: {result.totalDocuments}</p>
          </div>
        </>
      )}

      {error && <p>{JSON.stringify(error)}</p>}
    </div>
  );
}

export default Home;
