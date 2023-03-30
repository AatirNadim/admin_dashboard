import mongoose from 'mongoose'

const ProductSchema = mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    cateogy: String,
    rating: Number,
    supply: Number,
},
    { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);

export default Product;