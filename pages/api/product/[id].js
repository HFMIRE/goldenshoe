import dbConnect from "../../../utils/dbConnect";
import Product from "../../../models/Product";

const ProductData = async (req, res) => {
  await dbConnect();
  const { id } = req.query;
  try {
    const productData = await Product.find({ _id: id }).exec();
    res.status(200).json({ success: true, data: productData[0] });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

export default ProductData;
