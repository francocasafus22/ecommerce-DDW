import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import ProductList from "../components/ProductList";
import useProducts from "../hooks/useProducts";
import { Search } from "lucide-react";

function Category() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { category } = useParams();
  const search = searchParams.get("search");
  const p = Number(searchParams.get("p") || 1);
  const [textInput, setTextInput] = useState(search);

  const {
    data: result,
    isLoading,
    isError,
    error,
  } = useProducts(null, p, category, search);

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
    <>
      {isLoading ? (
        <p className="min-h-screen flex justify-center items-center">
          Cargando...
        </p>
      ) : (
        <div className="bg-gray-700 min-h-screen flex  flex-col justify-center items-center pt-22">
          <h1 className="text-emerald-400 text-center text-5xl font-bold mt-10">
            {result.products[0].category.name}
          </h1>

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
        </div>
      )}
    </>
  );
}

export default Category;
