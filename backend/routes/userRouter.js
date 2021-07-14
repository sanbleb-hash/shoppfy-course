import express from 'express';
import AsyncHandler from 
'express-async-handler';
import bcrypt from 'bcryptjs';
import { generateToken } from '../utils/generateToken.js';
import User from '../modals/userModal.js'
import { users} from '../config/user.js'

const userRouter = express.Router();

userRouter.get('/config',AsyncHandler(async(req,res)=>{
  // await User.remove({});
  const createdUsers = await User.insertMany(users);
  res.send([{ createdUsers}]);
 }));
 
 userRouter.post('/signin',AsyncHandler(async(req,res)=>{
   const user = User.findOne({email:req.body.email});
   if(user){
     if(bcrypt.compareSync(req.body.password ,user.password)){
       res.send({
         _id: user.id,
         name: user.name,
         email: user.email,
         isAdmin: user.isAdmin,
         token: generateToken(user),
       })
       return;
     }
   }
   res.status(401).send({message:'invalid imail or password'})
 }))
 export default userRouter;