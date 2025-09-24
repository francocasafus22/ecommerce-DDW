import { useParams } from "react-router-dom";
import useCart from "../hooks/useCart";
import useProducts from "../hooks/useProducts";

function Detalle() {
  const { id } = useParams();

  const { data: product, isLoading, isError, error } = useProducts(id);

  const { addProductCart } = useCart();

  if (isLoading) return <p>Cargando...</p>;

  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="pt-17 bg-gray-700 min-h-screen text-gray-100">
      <h1 className="text-4xl">{product.title}</h1>
      <img
        src={product.image}
        alt={product.title}
        className=" h-[350px] object-contain rounded-xl"
      />
      <p>{product.description}</p>
      {product && (
        <>
          <p>{product.price}</p>
          <button
            onClick={() => addProductCart({ product, quantity: 1 })}
            className="bg-emerald-400 py-2 px-5 rounded-md hover:bg-emerald-600"
          >
            Agregar Producto
          </button>
        </>
      )}
    </div>
  );
}

export default Detalle;
