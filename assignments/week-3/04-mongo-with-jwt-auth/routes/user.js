const { Router } = require("express");
const { User, Course } = require("../db");
const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../config')
const router = Router();
const userMiddleware = require("../middleware/user");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const user = req.body.username
    const pass = req.body.password

    User.findOne({
        username: user,
        password: pass
    }).then(async (val) => {
        if(val) {
            res.json({
                msg: "User already exists"
            })
            return
        }
        else {
            await User.create({
                username: user,
                password: pass
            })
        
            res.json({
                msg: "User created successfully"
            })
        }
    })
});

router.post('/signin', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username
    const password = req.body.password

    User.findOne({
        username,
        password
    }).then( (val) => {
        if(val) {
            const token = jwt.sign({username}, JWT_SECRET)
            res.send({
                token
            })
        } else {
            res.json({
                msg: "Username not found!"
            })
        }
    })
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const courses = await Course.find();
    res.json({
        courses: courses
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId
    const token = req.headers.authorization
    const jwtoken = token.split(' ')[1]
    const decoded = jwt.decode(jwtoken)
    const username = decoded.username

    await User.updateOne({
        username
    }, {
        "$push": {purchasedCourses: courseId}

    })

    res.json({
        msg: "Course purchased successfully"
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const token = req.headers.authorization
    const jwtoken = token.split(' ')[1]
    const decoded = jwt.decode(jwtoken)
    const username = decoded.username

    const user = await User.findOne({
        username
    })
    // console.log(user.purchasedCourses)
    const purchased = await Course.find({
        _id: { $in: user.purchasedCourses}
    })

    res.json({
        courses: purchased.map(val => val.title)
    })
});

module.exports = router