import dbConnect from "../../../utils/dbConnect";
import Product from "../../../models/Product";

const ProductApi = async (req, res) => {
  await dbConnect();
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const products = await Product.find({});
        res.status(200).json({ success: true, data: products });
      } catch (err) {
        res.status(400).json({ success: false });
      }
  }
};
export default ProductApi;
