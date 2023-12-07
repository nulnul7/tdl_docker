import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRoute from './routes/userRoute.js'
import todoRoute from './routes/todoRoute.js'
import cors from 'cors'
import morgan from 'morgan';

const app = express();
dotenv.config();
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("CONNECT TO mongoDB");
    } catch (error) {
        throw (error)
    }
}

connectDB();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(morgan());

app.use("/5R2I/users", userRoute)
app.use("/5R2I/todo", todoRoute)


app.use("*", (req, res) => {
    res.json("PAGE NOT FOUND yo")
})


const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log("server RUNNING on Port!!! :", PORT);
});
