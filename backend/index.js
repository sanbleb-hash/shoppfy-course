import express from 'express';
import dotenv from 'dotenv';
// import products from './products.js'
import connectDB from './config/db.js';
import productRoutes from './routes/productsRoutes.js'
import userRouter from './routes/userRouter.js';

dotenv.config();
connectDB();

const app = express();
app.use(express.json);
app.use(express.urlencoded({extended:true}));


app.get('/', (req, res) => { res.send('server is running') });

app.use('/api/products',productRoutes)
app.use('/api/product/:id',productRoutes)
app.use('/api/users',userRouter)
app.use((err,req,res,next)=>{res.status(500).send({message:err.message})})

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log('server is up on http:/localhost:5000')
})