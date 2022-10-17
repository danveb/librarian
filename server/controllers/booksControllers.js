const pool = require("../config/db.js"); 

// GET /api/books 
const getBooks = async (req, res, next) => {
    try {
        const books = await pool.query('SELECT * FROM books'); 
        // error check for no books
        if(books.rows.length === 0) {
            res.status(400);
            throw new Error("No books available"); 
        };
        res.status(200).json(books.rows); 
    } catch(error) {
        next(error); 
    };
}; 

// POST /api/books 
const addBook = async (req, res, next) => {
    try {
        const { title, description, cover, price } = req.body; 
        const book = await pool.query('INSERT INTO books (title, description, cover, price) VALUES($1, $2, $3, $4) RETURNING title, description, cover, price', [title, description, cover, price]); 
        // console.log(book.rows); 
        res.status(201).json(book.rows); 
    } catch(error) {
        next(error); 
    };
};

// GET /api/books/:id
const getBook = async (req, res, next) => {
    try {
        const { id } = req.params; 
        // console.log(id); 
        const book = await pool.query('SELECT * FROM books WHERE id = $1', [id]); 
        // console.log(book.rows); 
        // error check for no books
        if(book.rows.length === 0) {
            res.status(400);
            throw new Error("No book found"); 
        };
        res.status(200).json(book.rows); 
    } catch(error) {
        next(error); 
    };
};

// PUT /api/books/:id
const updateBook = async (req, res, next) => {
    try {
        const { id } = req.params; 
        const { title, description, cover, price } = req.body; 
        const book = await pool.query('UPDATE books SET title = $1, description = $2, cover = $3 , price = $4 WHERE id = $5 RETURNING id, title, description, cover, price', [title, description, cover, price, id]); 
        res.status(200).json(book.rows);     
    } catch(error) {
        next(error); 
    };
};

// DELETE /api/books/:id
const deleteBook = async (req, res, next) => {
    try {
        const { id } = req.params; 
        const book = await pool.query('DELETE FROM books WHERE id = $1', [id]); 
        if(!book) {
            res.status(400); 
            throw new Error("Could not find book"); 
        }; 
        return res.status(200).send(`Book ${id} deleted.`); 
    } catch(error) {
        next(error); 
    };
};

module.exports = {
    getBooks, 
    addBook, 
    getBook, 
    updateBook, 
    deleteBook, 
}; 