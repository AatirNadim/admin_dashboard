import express from 'express'
import { getUser } from '../controllers/general.js'

const router = express.Router()

// this is just a string, how does it parse the id for the database

router.get('/user/:id', getUser);

export default router;