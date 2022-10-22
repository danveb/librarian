import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios"; 
import "../styles/Book.css"; 
import { useEffect } from "react";
import Jumbotron from "../components/Jumbotron";

const Book = () => {
    const [book, setBook] = useState([]); 
    
    // API_URL
    const API_URL = process.env.REACT_APP_API_URL; 

    // useLocation
    const location = useLocation(); 
    const bookId = location.pathname.split("/")[2]; 

    // useEffect
    useEffect(() => {
        const fetchBook = async () => {
            try {
                const response = await axios.get(`${API_URL}/api/books/${bookId}`); 
                console.log(response.data); 
                setBook(response.data); 
            } catch(error) {
                console.log(error); 
            };
        };
        return () => {
            fetchBook(); 
        };
    // dependency array 
    }, [API_URL, bookId]);

    // CRUD for delete if needed 
    // useNavigate
    // const navigate = useNavigate(); 
    // // handleDelete
    // const handleDelete = async (id) => {
    //     // console.log(id); 
    //     try {
    //         await axios.delete(`${API_URL}/api/books/${id}`)
    //         // window.location.reload(); // forces reload
    //         navigate("/library");
    //     } catch(error) {
    //         console.log(error); 
    //     };
    // };

    return (
        <>
            {book.map((item) => (
                <div key={item.id}>
                    <Jumbotron title={item.title} text={item.description} />
                    <div className="book">
                        {item.cover && <img src={item.cover} alt="book cover" />}
                        <span>Author: {item.author}</span>
                        <span>Publisher: {item.publisher}</span>
                        <span>Price: ${item.price}</span>
                        <button className="btn btn-update"><Link to={`/library/${item.id}/update`}>Update</Link></button>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Book