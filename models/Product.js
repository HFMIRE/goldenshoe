const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: String,
  description: String,
  brand: String,
  price: Number,
  type: String,
  category: String, 
  image: String,
  color: String, 
  size: [Mixed] 
});

const Product = mongoose.models.Product || mongoose.model("Product", ProductSchema);

export default Product;