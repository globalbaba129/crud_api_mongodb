import { Schema, model } from "mongoose";


const productSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
            required: true,
        }   
    }
);

const Product = model("Product", productSchema);

export default Product;