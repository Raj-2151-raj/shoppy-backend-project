import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
       name: {
        type: String,
        required: true,  // ---- mendatary field.
        trim: true  // ---- removes extra spaces in the input
    },
    price: {
        type: Number,
        required: true,
        min: 0  // ---- Price must be positive 
    },
    description: {
        type: String,
        trim: true
    },
});

export default mongoose.model('Product', productSchema);