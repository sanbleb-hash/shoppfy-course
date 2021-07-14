import express from 'express';
import dotenv from 'dotenv';
// import products from './products.js'
import connectDB from './config/db.js';
import productRoutes from './routes/productsRoutes.js'

dotenv.config();
connectDB();

const app = express();

app.get('/', (req, res) => { res.send('server is running') });

app.use('/api/products',productRoutes)
app.use('/api/product/:id',productRoutes)

// app.get('/api/products', (req, res) => {
//     res.send(products)
// });

// app.get('/api/product/:id', (req, res) => {
//     const product = products.find(x => x._id === req.params.id);
//     if (!product) {
//         res.status(404).send({ message: 'product not found' })
//     } else {
//         res.send(product)
//     }
// });
const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log('server is up on http:/localhost:5000')
})