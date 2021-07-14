import express from 'express';


const router = express.Router();
import { getProduct, getProducts } from '../controllers/productControllers.js';

// fetching proudcts from DB

router.get ('/',getProducts);

// fetching single proudct from DB
router.get('/:id',getProduct);

export default router;