import express from 'express';
import { addProduct, deleteProduct, getAllProducts, getProductById , updateProduct } from '../controllers/productController.js';

const router = express.Router();

// GET all products
router.get('/products', getAllProducts);

// GET single product by ID
router.get('/products/:id', getProductById);

// POST new product
router.post('/products', addProduct);

// PUT update product by ID
router.put('/product/:id', updateProduct);

// DELETE product by ID
router.delete('/product/:id' , deleteProduct);

export default router;
