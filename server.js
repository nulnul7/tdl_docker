import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRoute from './routes/userRoute.js'
import todoRoute from './routes/todoRoute.js'
import cors from 'cors'
import path from 'path'

const app = express();
dotenv.config();
const connectDB = async ()=> {
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

if (process.env.NODE_ENV === 'production') {
    //set static folder
    app.use(express.static('client/build'));
    
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

app.listen(process.env.PORT || 5501, ()=> {
    connectDB();
    console.log("server RUNNING on Port", process.env.PORT);
})