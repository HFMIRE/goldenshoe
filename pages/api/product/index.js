import dbConnect from "../../../utils/dbConnect";
import Product from "../../../models/Product";

// this display the data  - information of the products on the menu

export default async (req, res) => {
  await dbConnect();
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        // this gets all of product
        const products = await Product.find({});
        res.status(200).json({ success: true, data: products });
      } catch (err) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        // add new product
        const newproducts = await Product.create(req.body);
        console.log("created a product");
        res.status(200).json({ success: true });
      } catch (err) {
        res.status(400).json({ success: false });
      }
  }
};
