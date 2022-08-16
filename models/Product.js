const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: String,
  description: String,
  brand: String,
  price: mongoose.Decimal128,
  type: String,
  category: String,
  image: String,
  color: String,
  size: [mongoose.Mixed],
});

const Product =
  mongoose.models.Product || mongoose.model("Product", ProductSchema);

export default Product;
