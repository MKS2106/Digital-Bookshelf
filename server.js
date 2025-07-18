import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import bookRouter from './routes/book.js'
import userRouter from './routes/user.js'

dotenv.config();

const app = express();
const PORT = 3000;

const uri = process.env.MONGODB_URL

//======================
app.use(express.json())

app.use('/api/books', bookRouter);
app.use('/api/users', userRouter);

mongoose.connect(uri)
.then(() => console.log("Connected succesfully to MongoDB for Digital BookShelf API!"))
.catch((e)=>  console.log("Error connecting to the DB"))

//========Routes========
app.get('/', (req,res) => {
    res.send("Digital Bookshelf API")
})

app.listen(PORT, () => {
    console.log(`Listening to PORT: ${PORT}`)
})
