const express = require("express");

//Initialize express app
const app = express();
const PORT = 3000;

//Middleware to parse JSON
app.use(express.json());

//Simulated book data (static object for now)
let books = [
  { id: 1, title: "Nodejs Masterclass", author: "Smith" },
  { id: 2, title: "Mastering MERN Stack", author: "John" },
  { id: 3, title: "Learning ExpressJS", author: "Doe" },
];

//!Get all books
app.get("/books", (req, res) => {
  res.json(books);
});

//?Add new book
app.post("/books", (req, res) => {
  // console.log(req.body);

  const newBook = req.body;
  newBook.id = books.length + 1;
  //Push new book into the existing book array
  books.push(newBook);
  // res.json({ message: "Book Added", newBook, allBooks: books });
  res.send("Book added successfully");
});

//! Get a book by ID
app.get("/books/:id", (req, res) => {
  //get the id from params
  const bookId = Number(req.params.id); //convert string to number //2
  const bookFound = books.find((b) => {
    return b.id === bookId;
  });
  if (!bookFound) {
    return res.json({ message: "Book not found" });
  }
  res.json(bookFound);
});

//!Delete a book by id
app.delete("/books/:id", (req, res) => {
  const bookId = Number(req.params.id); //3
  books = books.filter((b) => {
    return b.id !== bookId;
  });
  res.json({ message: "Book deleted successfully", books });
});

//!Update book by id
app.put("/books/:id", (req, res) => {
  const bookId = Number(req.params.id);
  const index = books.findIndex((b) => {
    return b.id === bookId;
  });
  if (index === -1) {
    return res.json({ message: "Book not found" });
  }

  //Update
  const updatedBook = { ...books[index], ...req.body };
  books[index] = updatedBook;
  res.json({ message: "Book updated", data: updatedBook, allBooks: books });
});

//!Start the server
app.listen(PORT, () => {
  console.log("Server is up and running");
});
