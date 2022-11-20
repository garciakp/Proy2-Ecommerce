const mongoose = require('mongoose')

const ReviewSchema = new mongoose.Schema({
    product_id:{
        type:String,
        required:true
    },
    user_id:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
},
{collection: 'reviews'}
)

module.exports = mongoose.model('ReviewModel', ReviewSchema)