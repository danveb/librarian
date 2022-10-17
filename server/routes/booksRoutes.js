const express = require("express"); 
const router = express.Router(); 
const { getBooks, addBook, getBook, updateBook, deleteBook } = require("../controllers/booksControllers.js"); 

// CRUD - GET, POST, PUT, DELETE 
router.get("/", getBooks); 
router.post("/", addBook); 
router.get("/:id", getBook); 
router.put("/:id", updateBook); 
router.delete("/:id", deleteBook); 

module.exports = router; 