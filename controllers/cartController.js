
// controllers/cartController.js
// This file contains the logic for managing the shopping cart, including adding, updating, and deleting
// items in the cart.

// Import necessary modules and models
import Cart from '../models/cartModel.js';

// Add an item to the cart for the authenticated user
export const addToCart = async (req, res) => {
  const { productId, quantity } = req.body;
  const cartItem = new Cart({ productId, quantity, userId: req.user._id });
  await cartItem.save();
  res.status(201).json(cartItem);
};
// Get all cart items for the authenticated user
export const updateCartItem = async (req, res) => {
    const { id } = req.params; 
    const { quantity } = req.body; 
  
    try {
      const cartItem = await Cart.findById(id);
      if (!cartItem) return res.status(404).json({ error: "Cart item not found" });
  
      // Check if the user is the owner of the cart item
      if (cartItem.userId !== req.user._id) {
        return res.status(403).json({ error: "Forbidden: You do not own this cart item" });
      }
  
      cartItem.quantity = quantity; // Update the quantity
      await cartItem.save(); // Save the updated cart item
      res.json(cartItem); // Return the updated cart item
    } catch (error) {
        console.log(error);
      res.status(500).json({ error: "Failed to update cart item"});
    }
  };

  export const deleteCartItem = async (req, res) => {
    const { id } = req.params; 
  
    try {
      const cartItem = await Cart.findById(id); // Find the cart item by ID
      if (!cartItem) return res.status(404).json({ error: "Cart item not found" });// Check if the cart item exists
  
      // Check if the user is the owner of the cart item
      if (cartItem.userId !== req.user._id) {
        return res.status(403).json({ error: "Forbidden: You do not own this cart item" });// If not, return a forbidden error
      }
  
      await Cart.findByIdAndDelete(id); // Delete the cart item
      res.json({ message: "Cart item deleted successfully" });// Return a success message
    } catch (error) {
      res.status(500).json({ error: "Failed to delete cart item" });
    }
}