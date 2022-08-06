import { useState, createContext, useContext } from "react";

// import { initiateCheckout } from '../lib/payments.js'
import { useGetProducts } from "../hooks/useRequest";
// import products from '../../shared/products.json';

const defaultCart = {
  products: {},
};

/**
 * @lesson-11-solution Exercise 1
 * We can use the React Context API to create a new
 * instance of Context that we can later use to
 * consume state globally.
 */

export const CartContext = createContext();

/**
 * @lesson-11-solution Exercise 3
 * We can simply rename our hook that manages the state to
 * useCartState, allowing us to have a function name that
 * makes sense, but still use it to access our state.
 */
let cart;
export function useCartState() {
  const [cart, updateCart] = useState(defaultCart);

  // const cartProducts = Object.keys(cart.products).map(key => {
  //   const product = products.find(({ id }) => `${id}` === `${key}`);
  //   return {
  //     ...cart.products[key],
  //     pricePerUnit: product.price
  //   }
  // });
  let cartProducts = [];
  const subtotal = cartProducts.reduce(
    (accumulator, { pricePerUnit, quantity }) => {
      return accumulator + pricePerUnit * quantity;
    },
    0
  );

  const quantity = cartProducts.reduce((accumulator, { quantity }) => {
    return accumulator + quantity;
  }, 0);

  function addToCart({ id }) {
    updateCart((prev) => {
      let cart = { ...prev };

      if (cart.products[id]) {
        const updateCartQuantity = cartProducts.filter((product) => {
          if (product.id === cart.products[id]) {
            product.quantity = cart.products[id].quantity + 1;
            return true;
          }
        });
      } else {
        cartProducts.push(
          (cart.products[id] = {
            id,
            quantity: 1,
          })
        );
      }

      return cart;
    });
  }

  //   function checkout() {
  //     initiateCheckout({
  //       lineProducts: cartProducts.map(({ id, quantity }) => {
  //         return {
  //           price: id,
  //           quantity
  //         }
  //       })
  //     })
  //   }

  return {
    cart,
    subtotal,
    quantity,
    addToCart,
    // checkout
  };
}

/**
 * @lesson-11-solution Exercise 3
 *
 */

export function useCart() {
  const cart = useContext(CartContext);
  return cart;
}
