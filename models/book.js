const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  author: { type: String, required: true },
  description: String,
  image: {
    type: String, 
    trim: true
  },
  link:{
    type: String,
    trim: true
  },
  title: { type: String, required: true },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
