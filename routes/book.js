import express from 'express'
import Book from '../models/Book.js'

const  router = express.Router();

router.get('/', async (req,res)=>{
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        console.error(error)
        res.status(500).json({error: error.message})
    }
})
router.post('/', async(req,res) => {
    try {
        const newBook = await Book.create(req.body)
        res.status(201).json(newBook);
    } catch (error) {
        console.error(error)
        res.status(500).json({error: error.message})
    }
})

router.delete("/:id", async(req,res) =>{
   const {id} = req.params
       try {
           const deletedBook = await Book.findByIdAndDelete(id)
           res.status(201).json(deletedBook)
       } catch (error) {
           console.error(error)
               res.status(400).json({error:error.message})
       }
})

router.put("/:id", async(req,res) => {
    const {id} = req.params
    try {
        const updatedBook = await Book.findByIdAndUpdate(id, req.body)
        res.status(200).json(updatedBook);
    } catch (error) {
        console.error(error)
               res.status(400).json({error:error.message})
    }
})

router.get('/:id', async (req, res) => {
    const {id} = req.params
    try {
        const book = await Book.findById(id)
        res.json(book)
    } catch (error) {
        console.error(error)
               res.status(400).json({error:error.message})
    }
} )
export default router;