import Product from '../modals/productModal.js'
import asyncHandler from 'express-async-handler';


// fetching proudcts from DB

const getProducts =  asyncHandler(async(req,res)=> {
  const products = await Product.find({}); 
  res.json(products)
});

// fetching single proudct from DB
const getProduct = asyncHandler( async(req,res)=> {
  const product = await Product.findById( req.params.id);

  if(product){

  res.json(product)
  } else {
    res.status(404).json({message:'product not found'}) 
  }
});

export { getProduct, getProducts};