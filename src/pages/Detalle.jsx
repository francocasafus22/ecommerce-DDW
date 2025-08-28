import { useParams } from "react-router-dom";

function Detalle() {
  const { id } = useParams();

  async function getProduct(id) {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product = await response.json();
    return product;
  }

  const product = getProduct(id);

  return (
    <div>
      <h1 className="text-4xl">{`Detalle ${id}`}</h1>
      <h2>{`Producto ${product.price}`}</h2>
      <button>Agregar Producto</button>
    </div>
  );
}

export default Detalle;
