import express from 'express';

import { generateToken } from '../utils/generateToken.js';
import User from '../modals/userModal.js'
import asyncHandler from 'express-async-handler';
import router from './productsRoutes.js';

const userRouter = express.Router();

//user router
router.post('/signin',asyncHandler(async(req, res)=>{
  const { email, password } = req.body
  const user = User.findOne({email})
  if(user && (await user.matchPassword(password))){
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      isAdmin: usr.isAdmin,
      tokeen: generateToken(user),
    });
  }
   else {
     res.status(401)
     throw new Error({Error: 'invalid imail or password'})
  }
}))

router.route('/profile',asyncHandler(async(req, res)=>{
  const user = User.findById(req.user._id);

if(user) {
res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      isAdmin: usr.isAdmin,
    });
} else {
  res.status(404)
  throw new Error('user not found') 
}

  res.send('success')
}));
 export default userRouter;