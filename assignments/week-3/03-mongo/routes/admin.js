const { Router } = require("express");
const { Admin, Course } = require("../db");
const adminMiddleware = require("../middleware/admin");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const user = req.body.username
    const pass = req.body.password
    console.log(user, pass)
    console.log("in admin signup")

    await Admin.create({
        username: user,
        password: pass
    })

    // const admin = new Admin({
    //     username: user,
    //     password: pass
    // })

    // admin.save()
    res.json({
        msg: "admin created successfully"
    })
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title
    const description = req.body.description
    const imageLink = req.body.imageLink
    const price = req.body.price

    const newCourse = await Course.create({
        title,
        description,
        price,
        imageLink
    })

    res.json({
        msg: "course created successfully",
        course_id: newCourse._id
    })
    console.log(newCourse)

});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const response = await Course.get({})
    console.log(courses)
    res.json({
        courses: response
    })
});

module.exports = router;