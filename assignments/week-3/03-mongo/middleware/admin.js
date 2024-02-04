const { Admin } = require("../db");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

    const username = req.headers.username
    const pass = req.headers.password

    Admin.findOne({
        username: username,
        password: pass
    }).then((val)=>{
        if(val) next()
        else {
            res.status(403).json({
                msg: "User doesn't exist"
            })
        }
    })
}

module.exports = adminMiddleware;