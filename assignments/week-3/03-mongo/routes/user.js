const { Router } = require("express");
const { User, Course } = require("../db");
const router = Router();
const userMiddleware = require("../middleware/user");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const user = req.body.username
    const pass = req.body.password

    await User.create({
        user,
        pass
    })

    res.json({
        msg: "User created successfully"
    })
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const response = await Course.get({})

    res.json({
        courses: response
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const coureseId = req.params.courseId
    const username = req.headers.username

    await User.updateOne({
        username: username,
        purchasedCourses: {
            "$push": courseId
        }
    });

    res.json({
        msg: "Course purchased successfully"
    })

});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic

    const response = await Course.get({})

    req.json({
        courses: response
    })
});

module.exports = router