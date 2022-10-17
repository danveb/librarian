const express = require("express"); 
const colors = require("colors");
const dotenv = require("dotenv").config(); 
const PORT = process.env.PORT || 4000; 
const booksRoutes = require("./routes/booksRoutes.js"); 

// initialize express app
const app = express();

// body parser for JSON 
app.use(express.json()); 
// app.use(express.urlencoded({ extended: false }));

// REST API - booksRoutes 
app.use("/api/books", booksRoutes); 

// sample GET request 
app.get("/", (req, res) => {
    res.send("Hello World"); 
}); 

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`.yellow.underline); 
});