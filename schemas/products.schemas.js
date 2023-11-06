import mongoose from 'mongoose';

const productSchemas = new mongoose.Schema({
    productId: {
        type: Number,
        required: true,
        unique: true,
    },
    productName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    productState: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
    },
});

export default mongoose.model('product', productSchemas);
