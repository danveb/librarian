import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import axios from "axios"; 
import Jumbotron from "../components/Jumbotron";
import Timeline from "../components/Timeline";
import { jumbotronBookList } from "../constants/jumbotron";
import "../styles/BookList.css"; 
import BookCover from "../components/BookCover";

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
                // console.log(response.data); 
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
        <>
            {jumbotronBookList.map((item) => (
                <Jumbotron key={item.id} title={item.title} text={item.text} />
            ))}
            <Timeline />
            <div>
                {books.length === 0 ? (
                    <h3 className="error">The Library is empty... please check back again</h3>
                ) : (
                    <>
                        <div className="bookList">
                            {books.map((book) => (
                                <BookCover key={book.id} book={book} />
                            ))}
                        </div>
                    </>
                )}
            </div>
            <div className="bookList__btn">
                <button className="btn btn-add-book"><Link to="/add">Add Book</Link></button>
            </div>
        </>
    )
}

export default BookList