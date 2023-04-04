import Product from "../models/Product.js";
import ProductStat from "../models/ProductStat.js";
import Transaction from "../models/Transaction.js";
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

// required params to get the transactions array
export const getTransactions = async (req, res) => {
  try {
    const { page = 1, pageSize = 20, sort = null, search = "" } = req.query;
    const generateSort = () => {
      const sortParsed  = JSON.parse(sort);
      const sortFormatted = {
        [sortParsed.field] : (sortParsed.sort = 'asc' ? 1 : -1)
      } 
      return sortFormatted;
    }
    const sortFormatted = Boolean(sort) ? generateSort() : {};

    const transactions = await Transaction.find({
      $or: [
        { cost : { $regex : new RegExp(search, 'i') } },
        {userId : { $regex : new RegExp(search, 'i') } },
      ]
    }).sort(sortFormatted)
    .skip(page * pageSize)
    .limit(pageSize)
    const total = await Transaction.countDocuments({
      name : { $regex : search, $options : 'i'}
    });
    res.status(200).json({
      transactions,
      total,
    })


  } catch(err) {
    res.status(404).json({
      message : err.message,
    })
  }
}