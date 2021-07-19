import express from 'express';
import productRoutes from './routes/productsRoutes.js'

import dotenv from 'dotenv'
import connectDB from './config/db.js';
import userRouter from './routes/userRouter.js';


dotenv.config();
connectDB()
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended:true }))


app.use('/api/products',productRoutes 
);

app.use('/api/product/:id',productRoutes 
);
app.use('/api/users',userRouter);

app.get('/',(req, res) =>{
res.send('app is running')
})

const port = process.env.PORT || 5000;

app.listen(port,()=> console.log(`app is running on port ${port}`));