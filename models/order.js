const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    },
  address:{
    mobile:Number,
    houseName: String,
    street:String,
    city: String,
    pincode: String,
    state: String
  },
  items: [
    {
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'products'
          },
      quantity:{
        type:Number
      }
    }
  ],
  totalAmount: Number,
  OrderStatus:{
    type:String,
    enum:['Order Placed','Shipped','Delivered','Cancelled','Returned']
  },
  orderDate: { 
    type: Date, 
    default: Date.now 
  },
  paymentMethod: String,
  orderId:String
});

const order = mongoose.model('orders', orderSchema);

module.exports = order;