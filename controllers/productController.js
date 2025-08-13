// controllers/productController.js
import Product from '../models/productModel.js';

// ---------------- Get all products ----------------
export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch products", details: error.message });
    }
};

// ---------------- Get product by ID ----------------
export const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ error: "Product not found" });
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch product", details: error.message });
    }
};

// ---------------- Add new product ----------------
export const addProduct = async (req, res) => {
    const { name, price, description } = req.body;

    // Input validation
    if (!name || !price || !description) {
        return res.status(400).json({ error: "All fields are required" });
    }

    const product = new Product({ name, price, description });

    try {
        const savedProduct = await product.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(500).json({ error: "Failed to add product", details: error.message });
    }
};

// ---------------- Update product ----------------
export const updateProduct = async (req, res) => {
    const { name, price, description } = req.body;

    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            { name, price, description },
            { new: true, runValidators: true }
        );

        if (!updatedProduct) return res.status(404).json({ error: "Product not found" });

        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ error: "Failed to update product", details: error.message });
    }
};

// ---------------- Delete product ----------------
export const deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) return res.status(404).json({ error: "Product not found" });

        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete product", details: error.message });
    }
};
