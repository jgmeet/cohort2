const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../config')

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const jwtoken = req.headers.authorization
    // const jwtoken = token.split(' ')[1]
    console.log(jwtoken)
    try {
        const decodeVal = jwt.verify(jwtoken, JWT_SECRET)
        console.log(decodeVal)
        next()
    } catch(err) {
        res.status(403).json({
            msg: "Authentication failed!"
        })
    }
}

module.exports = adminMiddleware;