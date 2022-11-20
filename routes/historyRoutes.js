const express = require('express')
const router = express.Router()

const cartSchema = require('../models/CartModel')

router.get('/:id', async (req, res) => {
    
    await cartSchema.find({user_id:req.params.id, isBought:true})
    .then(data =>{
        res.json(data)
    })
    .catch(error=>{
        res.json(error)
    })
})

module.exports = router