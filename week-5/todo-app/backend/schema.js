const zod = require("zod")

const postSchema = zod.object(
    zod.string(),
    zod.string()
)

const putSchema = zod.number()

module.exports = {
    createTodo: postSchema,
    updateTodo: putSchema
}