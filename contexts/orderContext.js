import React, { createContext, useState } from "react";

export const OrderContext = createContext();

const OrderContextProvider = (props) => {
  const [order, setOrder] = useState([]);
  const storeOrder = (order) => {
    setOrder([
      {
        products: [
          {
            productId: order.productId,
            quantity: order.quantity,
            size: order.size,
          },
        ],
        orderTotal: order.orderTotal,
        userId: order.userId,
      },
    ]);
  };
  const removeOrder = () => {
    setOrder({});
  };
  return (
    <OrderContext.Provider value={{ order, storeOrder }}>
      {props.children}
    </OrderContext.Provider>
  );
};

export default OrderContextProvider;
