const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')

const userSchema = require('../models/UserModel')

router.post('/register', async (req, res) => {
    
    const saltPassword = await bcrypt.genSalt(10)
    const securePassword = await bcrypt.hash(req.body.password, saltPassword)

    const signedUpUser = new userSchema({
        username:req.body.username,
        password: securePassword
    })
    signedUpUser.save()
    .then(data =>{
        res.json(data)
    })
    .catch(error=>{
        res.json(error)
    })
})

router.post('/login', async (req, res) => { 
    userSchema.findOne({
        username: req.body.username
    }).then( user => {
        if(!user){
            return res.status(401).json({
                error: new Error("User not found")
            })
        }
        bcrypt.compare(req.body.password, user.password).then( valid => {
            if(!valid){
                return res.status(401).json({
                    error: new Error("User not found")
                })
            }
            res.status(200).json(user)
        }).catch( error => {
            res.status(500).json({
                error: error
            })
        })
    }).catch(error=>{
        res.status(500).json({
            error: error
        })
    })
})

router.post('/prelogin', async (req, res) => {
    userSchema.findOne({
        _id: req.body.user_id
    }).then( data => {
        res.json(data)
    }).catch(error=>{
        res.status(500).json({
            error: error
        })
    })
})

router.get('/', async (req, res) => {
    userSchema.findOne({
        _id: req.query.user_id
    }).then( data => {
        res.json(data)
    }).catch(error=>{
        res.status(500).json({
            error: error
        })
    })
})
module.exports = router