const { Router } = require("express");
const { Admin, Course} = require("../db");
const jwt = require('jsonwebtoken')
const adminMiddleware = require("../middleware/admin");
const {JWT_SECRET} = require('../config');
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username
    const password = req.body.password

    await Admin.create({
        username,
        password
    })

    res.status(201).json({
        msg: "Admin created successfully"
    })
});

router.post('/signin', (req, res) => {
    // Implement admin signin logic
    const username = req.body.username
    const password = req.body.password

    Admin.findOne({
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

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    await Course.create({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price
    })

    res.json({
        msg: "course created successfully"
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const courses = await Course.find();
    res.json({
        courses: courses
    })
});

module.exports = router;