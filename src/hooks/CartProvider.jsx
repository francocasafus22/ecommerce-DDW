import { useState, useEffect } from "react";
import { CartContext } from "./CartContext";

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const localCart = localStorage.getItem("cart");
    if (localCart) {
      setCart(JSON.parse(localCart)); // Pasar de JSON a objeto JS
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart)); // Pasar de objeto JS a JSON
  }, [cart]);

  function addProductCart({ product, quantity }) {
    setCart((prevCart) => {
      const existItem = prevCart.find((item) => item.id == product.id);
      if (existItem) {
        return prevCart.map((item) =>
          item.id == product.id
            ? {
                ...item,
                quantity: item.quantity + quantity,
                subTotal: item.price * (item.quantity + quantity),
              }
            : item
        );
      } else {
        return [
          ...prevCart,
          {
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            quantity: quantity,
            subTotal: product.price * quantity,
          },
        ];
      }
    });
  }

  function deleteProduct({ productID }) {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productID)); // Eliminar el producto con id = productId
  }

  function addOneProduct() {}

  function removeOneProduct({ productID }) {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id == product.id && item.quantity < 1
          ? {
              ...item,
              quantity: item.quantity - 1,
              subTotal: item.price * (item.quantity + quantity),
            }
          : item
      )
    );

    cart.map((item) =>
      item.id == productID && item.quantity == 1
        ? deleteProduct(productID)
        : item
    );
  }

  function clearCart() {
    setCart([]);
  }

  function getTotal() {
    return cart.reduce((total, item) => total + item.subTotal, 0).toFixed(2);
  }

  function getTotalItems() {
    return cart.length;
  }

  const value = {
    cart,
    addOneProduct,
    addProductCart,
    deleteProduct,
    removeOneProduct,
    clearCart,
    getTotal,
    getTotalItems,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default CartProvider;
