// this endpint - deals with order +  display the order + edit the order + delete the order  + add a order
import dbConnect from "../../../utils/dbConnect";
import Order from "../../../models/Order";

const OrderApi = async (req, res) => {
  await dbConnect();
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        // this gets all of product
        const orders = await Order.find({}).populate({
          path: "products",
          populate: {
            path: "productId",
            model: "Product",
          },
        });
        res.status(200).json({ success: true, data: orders });
      } catch (err) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        // add new product
        const newOrder = await Order.create(req.body);
        console.log("created a product");
        res.status(200).json({ success: true });
      } catch (err) {
        res.status(400).json({ success: false });
      }
  }
};

export default OrderApi; 