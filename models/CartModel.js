const mongoose = require('mongoose')

const CartSchema = new mongoose.Schema({
    product_id:{
        type:String,
        required:true
    },
    user_id:{
        type:String,
        required:true
    },
    isBought:{
        type:Boolean,
        default: false
    },
},
{collection: 'carts'}
)
module.exports = mongoose.model('CartModel', CartSchema)