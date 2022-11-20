const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    owner_id:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
},
{collection: 'products'}
)

module.exports = mongoose.model('ProductModel', ProductSchema)