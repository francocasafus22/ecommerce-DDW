import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductList from "../components/ProductList";

function Category() {
  const { category } = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProductsByCategory();
  }, [category]);

  async function fetchProductsByCategory() {
    if (category) {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${category}`
      );
      const data = await response.json();
      setProducts(data);
    }
  }

  return (
    <div>{products.length > 0 && <ProductList products={products} />}</div>
  );
}

export default Category;
