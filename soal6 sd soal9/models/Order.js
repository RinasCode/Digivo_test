const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, required: true },
  email: { type: String, required: true },
  order_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Order', OrderSchema);
