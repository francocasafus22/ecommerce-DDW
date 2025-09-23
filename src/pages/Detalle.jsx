import { useParams } from "react-router-dom";
import useCart from "../hooks/useCart";
import { useEffect, useState } from "react";

function Detalle() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addProductCart } = useCart();

  async function getProduct(id) {
    const response = await fetch(`http://localhost:3000/api/products/${id}`);
    const product = await response.json();
    return product;
  }

  useEffect(() => {
    getProduct(id).then((data) => setProduct(data));
  }, [id]);

  if (!product)
    return (
      <div className="min-h-screen flex justify-center items-center  bg-gray-700  text-gray-100">
        <p className="">Cargando...</p>
      </div>
    );
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
