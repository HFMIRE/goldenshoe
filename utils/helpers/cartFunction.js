import { useState } from "react";

let defaultCart = {
  products: {},
};
const [cart, updateCart] = useState(defaultCart);

export function addToCart({ id } = {}) {
  updateCart((prev) => {
    let cartState = { ...prev };

    if (cartState.products[id]) {
      cartState.products[id].quantity = cartState.products[id].quantity + 1;
    } else {
      cartState.products[id] = {
        id,
        quantity: 1,
      };
    }
    return cartState;
  });
}
