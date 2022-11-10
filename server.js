import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRoute from './routes/userRoute.js'
import todoRoute from './routes/todoRoute.js'
import cors from 'cors'

const app = express();
dotenv.config();
const connect = async ()=> {
    try {
        mongoose.connect(process.env.MONGO_URI)
        console.log("CONNECT TO mongoDB");
    } catch (error) {
        throw(error)
    }
}

// middleware
app.use(cors());
app.use(express.json());

app.use("/5R2I/users", userRoute)
app.use("/5R2I/todo", todoRoute)


app.use("*", (req, res) => {
    res.json("PAGE NOT FOUND")
})
app.listen(process.env.PORT || 5600, ()=> {
    connect();
    console.log("server RUNNING on Port", process.env.PORT);
})