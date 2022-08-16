const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  products: [
    {
      productId: String,
      qty: Number,
    },
  ],
  orderTotal: Number,
  userId: String,
});

const Order = mongoose.models.Order || mongoose.model("Order", OrderSchema);

export default Order;
