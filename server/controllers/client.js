import Product from "../models/Product.js";
import ProductStat from "../models/ProductStat.js";
import User from "../models/User.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
// all the product information along with the states
    const productsWithStats = await Promise.all(products.map(async (product) => {
      const stat = await ProductStat.find({
        productId: product._id,
      })
      return {
        ...product._doc,
        stat,
      }
    }))
    return res.status(200).json(productsWithStats)

  }
  catch (err) {
    return res.status(404).json({
      message: err.message,
    })
  }
};


export const getCustomers = async (req, res) => {
  try {
    const customers = await User.find({
      role : 'user'
      // do not send password to the frontend
    }).select('-password');
    res.status(200).json(customers);
  }
  catch(err) {
    return res.status(404).json({
      message : err.message,
    })
  }
}