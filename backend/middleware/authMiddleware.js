const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const auth = asyncHandler(async (req, res, next) => {
    
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            let token
            //Get token from header
            token = req.headers.authorization.split(' ')[1]

            //veriy token

            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            console.log(decoded) 
            //Get user from the token
            console.log(req.user) 
            req.user = await User.findById(decoded.id).select('-password')
            next()
        } catch (error) {
            console.log(error)
            res.status(401)
            throw new Error('Not authorized')
        }
       
    }
    else {
        res.status(401)
        throw new Error('Not authorized, No token')
    }

})

module.exports = { auth }