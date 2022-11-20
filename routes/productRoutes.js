const express = require('express')
const router = express.Router()

const productSchema = require('../models/ProductModel')

router.get('/', async (req, res) => {
    if(req.query.user_id){
        await productSchema.find({owner_id:req.query.user_id})
        .then(data =>{
            res.json(data)
        })
        .catch(error=>{
            res.json(error)
        })
    }else if(req.query.product_id){
        await productSchema.findOne({_id:req.query.product_id})
        .then(data =>{
            res.json(data)
        })
        .catch(error=>{
            res.json(error)
        })
    }  
})

router.get('/recent', async (req, res) => {
    await productSchema.find({}).sort('-date').limit(10)
    .then(data =>{
        res.json(data)
    })
    .catch(error=>{
        res.json(error)
    })
})

router.get('/search', async (req, res) => {
    await productSchema.find({name:{$regex:req.query.name, $options:'i'}})
    .then(data =>{
        res.json(data)
    })
    .catch(error=>{
        res.json(error)
    })
})

router.get('/category', async (req, res) => {
    await product
    .find({
        category:{$regex:req.query.category, $options:'i'}
    })
    .then(data =>{
        res.json(data)
    })
    .catch(error=>{
        res.json(error)
    })
})

router.post('/', (req, res) => {
    const newProduct = new productSchema({
        owner_id:req.body.owner_id,
        name: req.body.name,
        description: req.body.description,
        price: req.body.price
    })
    newProduct.save()
    .then(data =>{
        res.json(data)
    })
    .catch(error=>{
        res.json(error)
    })
})

router.put('/', async (req, res) => {
    await product
    .updateOne({_id:req
        .body
        ._id, owner_id:req.body.owner_id}, {
            name: req.body.name,
            description: req.body.description,
            price: req.body.price
        })
    .then(data =>{
        res.json(data)
    }
    )
    .catch(error=>{
        res.json(error)
    })
})


router.delete('/', async (req, res) => {
    await product
    .delete
    .one({_id:req
        .body
        ._id, owner_id:req.body.owner_id})
    .then(data =>{
        res.json(data)
    })
    .catch(error=>{
        res.json(error)
    })
})


module.exports = router