// seeds/seed.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const Product = require('../models/Product');
const Order = require('../models/Order');
const Cart = require('../models/Cart');

dotenv.config();

mongoose.connect(process.env.CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
        console.log('MongoDB connected');

        // Seed Produk
        const product = new Product({
            name: 'Tablet',
            stock: 10,
            total_sold: 0
        });
        await product.save();
        console.log('Product saved:', product);

        // Seed Cart
        const cart = new Cart({
            productId: product._id,  // ID Produk dari product yang baru disimpan
            quantity: 2,
            email: 'user@example.com',
            dateAdded: new Date()
        });
        await cart.save();
        console.log('Cart saved:', cart);

        // Seed Order
        const order = new Order({
            productId: product._id,  // Pastikan ID Produk benar
            quantity: 2,
            email: 'user@example.com',
            orderDate: new Date()
        });
        await order.save();
        console.log('Order saved:', order);

        mongoose.connection.close();
        console.log('Database seeding completed!');
    })
    .catch(err => {
        console.error('MongoDB connection error:', err);
        mongoose.connection.close();
    });
