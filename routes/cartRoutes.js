const express = require('express')
const router = express.Router()

const cartSchema = require('../models/CartModel')

router.get('/', async (req, res) => {
    
    await cartSchema.find({user_id:req.query.user_id, isBought:false})
    .then(data =>{
        res.json(data)
    })
    .catch(error=>{
        res.json(error)
    })
})

router.post('/', async (req, res) => {
    const newCart = new cartSchema({
        product_id:req.body.product_id,
        user_id:req.body.user_id
    })
    newCart.save()
    .then(data =>{
        res.json(data)
    })
    .catch(error=>{
        res.json(error)
    })
})

router.post('/buy', async (req, res) => {
    
    await cartSchema.updateMany({user_id:req.body.user_id, isBought:false},{isBought:true})
    .then(data =>{
        res.json(data)
    })
    .catch(error=>{
        res.json(error)
    })
})

router.delete('/', async (req, res) => {
    await cartSchema.findByIdAndDelete(req.query.item_id)
    .then(data =>{
        res.json(data)
    })
    .catch(error=>{
        res.json(error)
    })
})



module.exports = router