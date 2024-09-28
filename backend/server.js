import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import products from './data/products.js';

dotenv.config();

connectDB();

const port = process.env.PORT || 5000;
const app = express()




app.get('/', (req, res) => {
    res.send('Hello Worldsssssssssssss!')
});
app.get('/api/products', async(req, res) => {
   res.json(products);
})
app.get('/api/products/:id', async(req, res) => {
   const product = products.find((p) => p._id === req.params.id);
   res.json(product)
 })

app.listen(port, () => console.log(`Server running on port ${port}`))
