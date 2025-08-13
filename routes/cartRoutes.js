import express from 'express';
import { addToCart, deleteCartItem, updateCartItem } from '../controllers/cartController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/cart', authMiddleware, addToCart);
router.put('/cart/:id', authMiddleware, updateCartItem);
router.delete('/cart/:id', authMiddleware, deleteCartItem);

export default router;