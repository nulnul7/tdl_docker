import mongoose from "mongoose";

const listTodoSchema = mongoose.Model({
    todo: {
        type: String,
        require: true
    },
    date: {
        type: String,
        require: true
    },
    isDone: {
        type: Boolean,
        default: false
    }
})

const listTodo = mongoose.model('todos', listTodoSchema)  // todos harus jamak pakai s
export default listTodo;