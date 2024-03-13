const { Router } = require("express");
const { User, Course } = require("../db");
const router = Router();
const userMiddleware = require("../middleware/user");

// User Routes
router.post('/signup', async (req, res) => {
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

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const response = await Course.find()

    res.json({
        courses: response
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId
    const username = req.headers.username

    console.log(courseId, username);

    await User.updateOne({
        username: username
    }, {
        "$push": {
            purchasedCourses: courseId
        }
    });

    res.json({
        msg: "Course purchased successfully"
    })

});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic

    const user = await User.findOne({
        username: req.headers.username
    })

    const purchased = await Course.find({
        _id: { $in: user.purchasedCourses}
    })

    res.json({
        courses: purchased.map((course) => course.title)
    })
});

module.exports = router