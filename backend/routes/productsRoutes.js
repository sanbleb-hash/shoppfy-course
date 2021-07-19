import express from 'express';

import Product from '../modals/productModal.js';
import User from '../modals/userModal.js'
import asynchandler from 'express-async-handler';

const router = express.Router();

// fetching single product from db

router.get('/',asynchandler(async(req, res)=> {
  const products = await Product.find({}) ;
  res.json(products)
}));


// fetching single product from db
router.get('/:id',asynchandler(async(req, res)=> {
  const product = await Product.findById(req.params.id);
  if(product){
  res.json(product)
  } else {
    return res.status(404).json({message:'products not found'})
  }
}));


export default router;