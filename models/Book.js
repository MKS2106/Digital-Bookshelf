import mongoose from 'mongoose'
const {Schema} = mongoose;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  isbn: {type: String, unique: true},
  publishedDate: {type: Date},
  inStock: {type: Boolean, default: true},
});
 
export default mongoose.model("Book", bookSchema)