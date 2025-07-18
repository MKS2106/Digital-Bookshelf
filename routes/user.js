import express from 'express'
import User from '../models/User.js'

const router = express.Router()

router.post('/', async (req,res) => {
    try {
        const newUser= await User.create(req.body)
        res.status(201).json(newUser)
    } catch (error) {
        console.error(error)
               res.status(400).json({error:error.message})
    }
})

router.get('/', async (req,res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        console.error(error)
               res.status(400).json({error:error.message})
    }
})

router.post('/:userId/reviews/:bookId', async(req, res) => {
    try {
        const user = await User.findById(req.params.userId)
        user.reviews.push({book: req.params.bookId, review: req.body.reviews})
        await user.save()
        res.json(user)
    } catch (error) {
        
    }
})

export default router