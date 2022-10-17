const express = require("express"); 
const colors = require("colors");
const dotenv = require("dotenv").config(); 
const PORT = process.env.PORT || 4000; 

// initialize express app
const app = express();

// sample GET request 
app.get("/", (req, res) => {
    res.send("Hello World"); 
}); 

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`.yellow.underline); 
});