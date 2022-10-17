import { useState, useEffect } from "react";
import axios from "axios"; 
import Book from "../components/Book"; 

const BookList = () => {
    // useState
    const [books, setBooks] = useState([]); 

    // API_URL 
    const API_URL = process.env.REACT_APP_API_URL; 

    // useEffect
    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get(`${API_URL}/api/books`); 
                console.log(response.data); 
                setBooks(response.data); 
            } catch(error) {
                console.log(error); 
            };
        };
        return () => {
            fetchBooks(); 
        };
    // dependency array 
    }, [API_URL]);

    return (
        <div>
            <h1>Librarian Book Shoppe</h1>
            <div className="books">
                {books.map((book) => (
                    <Book key={book.id} book={book} />
                ))};
            </div>
        </div>
    )
}

export default BookList