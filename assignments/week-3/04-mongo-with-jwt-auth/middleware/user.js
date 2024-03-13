const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../config')

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization
    const jwtoken = token.split(' ')[1]
    try {
        const resp = jwt.verify(jwtoken, JWT_SECRET)
        if(resp) next()
    } catch(err) {
        res.status(403).json({
            msg: "Authentication failed!"
        })
    }
}

module.exports = userMiddleware;