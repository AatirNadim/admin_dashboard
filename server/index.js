import express from "express"; 
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors'

import dotenv from 'dotenv'
import helmet from "helmet";

import morgan from "morgan";

import clientRoutes from './routes/client.js'
import generalRoutes from './routes/general.js'
import managementRoutes from './routes/management.js'
import salesRoutes from './routes/sales.js'

import User from "./models/User.js";
import Product from "./models/Product.js";
import ProductStat from "./models/ProductStat.js";
import Transaction from "./models/Transaction.js";
import { dataUser, dataProduct, dataProductStat, dataTransaction} from './data/index.js'
// import {}

// configuration

dotenv.config();
const app = express();
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({
    policy : 'cross-origin'
}))

app.use(morgan('common'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : false }))

app.use(cors())

// the routes

app.use('/client',clientRoutes);
app.use('/general', generalRoutes);
app.use('/management', managementRoutes);
app.use('/sales', salesRoutes);


const PORT = process.env.PORT || 5001;

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser : true,
    useUnifiedTopology : true,
}).then(() => {
    console.log('success');
    app.listen(PORT)
    console.log('app listening in port ', PORT);
    // User.insertMany(dataUser);
    // console.log('users inserted into the database');
    // Product.insertMany(dataProduct);
    // console.log('products inserted into the database');
    // ProductStat.insertMany(dataProductStat);
    // console.log('product stats inserted into the database');
    // Transaction.insertMany(dataTransaction);
    // console.log('transactions inserted into the database');
}).catch(err => {
    console.log(err);
})