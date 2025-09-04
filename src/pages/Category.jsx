import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductList from "../components/ProductList";

function Category() {
  const { category } = useParams();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProductsByCategory();
  }, [category]);

  async function fetchProductsByCategory() {
    if (category) {
      const response = await fetch(`https://fakestoreapi.com/products`);
      const data = await response.json();
      const dataFiltered = data.filter(
        (product) => product.category == category
      );
      setProducts(dataFiltered);
      setLoading(false);
    }
  }
  if (loading)
    return (
      <p className="min-h-screen flex justify-center items-center text-gray-100 text-4xl">
        Cargando...
      </p>
    );
  return (
    <div className="pt-25 bg-gray-700">
      {products.length > 0 && (
        <ProductList
          products={products}
          title={"Productos"}
          description={products[0].category}
        />
      )}
    </div>
  );
}

export default Category;
