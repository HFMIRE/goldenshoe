const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: String,
  description: String,
  brand: String,
  price: Number,
  type: String,
  image: String,
});

const Product = mongoose.models.Product || mongoose.model("Product", ProductSchema);

export default Product;