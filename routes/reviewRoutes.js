const express = require('express')
const router = express.Router()

const reviewSchema = require('../models/ReviewModel')

router.get('/', async (req, res) => {
    await reviewSchema.find({product_id:req.query.product_id})
    .then(data =>{
        
        res.json(data)
    })
    .catch(error=>{
        res.json(error)
    })
})

router.get('/user', async (req, res) => {
    await review
    .find({
        user_id:req.query.user_id
    })
    .then(data =>{
        res.json(data)
    })
    .catch(error=>{
        res.json(error)
    })
})

router.get('/product', async (req, res) => {
    await review
    .find({
        product_id:req.query.product_id
    })
    .then(data =>{
        res.json(data)
    })
    .catch(error=>{
        res.json(error)
    })
})

router.get('/rating', async (req, res) => {
    await review
    .find({
        rating:{$gte:req.query.rating}
    })
    .then(data =>{
        res.json(data)
    })
    .catch(error=>{
        res.json(error)
    })
})

router.post('/', async (req, res) => {
    const newReview = new reviewSchema({
        user_id:req.body.user_id,
        product_id:req.body.product_id,
        rating:req.body.rating,
        description:req.body.description,
    })
    newReview.save()
    .then(data =>{
        res.json(data)
    })
    .catch(error=>{
        res.json(error)
    })
})

router.delete('/', async (req, res) => {
    await reviewSchema.findByIdAndDelete
    (req.query.review_id)
    .then(data =>{
        res.json(data)
    })
    .catch(error=>{
        res.json(error)
    })
})

module.exports = router