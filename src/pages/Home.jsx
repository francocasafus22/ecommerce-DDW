import { useEffect, useState } from "react";

import ProductList from "../components/ProductList";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProductsByCategory();
  }, []);

  async function fetchProductsByCategory() {
    const response = await fetch(`https://fakestoreapi.com/products`);
    const data = await response.json();
    setProducts(data);
  }
  return (
    <div className="bg-gray-700 min-h-screen flex  flex-col justify-center items-center ">
      <ProductList
        products={products}
        title={"Batuk"}
        description={"50% de descuento en tu primer compra"}
      />
    </div>
  );
}

export default Home;
