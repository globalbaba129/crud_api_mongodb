import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import productRoutes from './route/productRouts.js'

const app = express();
const port = 5961;

mongoose.connect("mongodb://localhost:27017/productdb");


app.use(cors());
app.use(express.json());




app.use('/home', productRoutes);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
