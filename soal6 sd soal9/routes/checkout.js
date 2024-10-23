const express = require('express');
const mongoose = require('mongoose');
const Product = require('../models/Product');
const Order = require('../models/Order');
const Cart = require('../models/Cart');

const router = express.Router();

router.get('/product/:id', async (req, res) => {
  const productId = req.params.id;
  console.log("Received productId:", productId); // Menambahkan log
  try {
      const product = await Product.findById(productId);
      console.log("Found product:", product); // Menambahkan log
      if (!product) {
          return res.status(404).send('Product not found');
      }
      res.status(200).json(product);
  } catch (error) {
      res.status(500).send('Error retrieving product: ' + error.message);
  }
});

router.post('/checkout', async (req, res) => {
    const { productId, quantity, email } = req.body;
    
    const session = await mongoose.startSession();
    session.startTransaction();
    try {
        const product = await Product.findById(productId).session(session);
        if (product.stock < quantity) throw new Error('Insufficient stock');

        await Product.updateOne({ _id: productId }, { $inc: { stock: -quantity, total_sold: quantity } }).session(session);
        await Order.create([{ productId, quantity, email }], { session });
        await Cart.deleteOne({ productId, email }).session(session);

        await session.commitTransaction();
        res.status(200).send('Checkout successful');
    } catch (error) {
        await session.abortTransaction();
        res.status(500).send('Checkout failed: ' + error.message);
    } finally {
        session.endSession();
    }
});

module.exports = router;
