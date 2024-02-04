const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://jgmeet:ZF305qFuVXwVqsyl@cluster0.xkeqc5g.mongodb.net/")

const ToDo = mongoose.model('todos', {
    title: String,
    description: String
})

module.exports = ToDo;