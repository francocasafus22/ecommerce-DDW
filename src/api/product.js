import axios from "axios";

export const getProducts = async (p, category, search) => {
  const { data } = await axios.get(`http://localhost:3000/api/products`, {
    params: { p, category, search },
  });
  return data;
};

export const getProductByID = async (id) => {
  const { data } = await axios.get(`http://localhost:3000/api/products/${id}`);
  return data;
};

export const createProduct = async (productData) => {
  const { data } = await axios.post(
    "http://localhost:3000/api/products",
    productData
  );

  return data;
};

export const deleteProduct = async (id) => {
  const { data } = await axios.delete(
    `http://localhost:3000/api/products/${id}`
  );
  return data;
};
