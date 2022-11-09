import express from 'express'
import User from '../models/userModel.js'

const router = express.Router();


router.post('/register', async (req, res, next) => {

    const newUser = new User(req.body)

    try {
        const createUser = await newUser.save()
        console.log(createUser);
        res.status(200).json(createUser)
    } catch (error) {
        next(error)
    }

})

router.get('/getUsers', async (req, res, next) => {
    try {
        const getUsers = await User.find()
        res.status(200).json(getUsers)
    } catch (error) {
        next(error)
    }
})

router.get('/getUser', async (req, res, next) => {
    try {
        const getUser = await User.findById(req.params.id)
        res.status(200).json(getUser)
    } catch (error) {
        next(error)
    }
})



export default router