import { createContext, useState, useEffect, useContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id && product.quantity < 10 ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== id));
  };

  const updateQuantityEnMas = (id, quantity) => {
    setCart((prevCart) =>
      prevCart.map((product) =>
        product.id === id && product.quantity < 10 ? { ...product, quantity: quantity + 1  } : product

      )
    );
  };
  const updateQuantityEnMenos = (id, quantity) => {
    setCart((prevCart) =>
      prevCart.map((product) =>
        product.id === id && product.quantity > 0? { ...product, quantity: quantity - 1  } : product
      )
    );
  };

  const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart, updateQuantityEnMas, updateQuantityEnMenos, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext)