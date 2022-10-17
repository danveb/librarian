import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; 

const Book = ({ book }) => {
    // API_URL
    const API_URL = process.env.REACT_APP_API_URL; 

    // useNavigate
    const navigate = useNavigate(); 

    // handleDelete
    const handleDelete = async (id) => {
        // console.log(id); 
        try {
            await axios.delete(`${API_URL}/api/books/${id}`)
            // window.location.reload(); // forces reload
            navigate("/");
        } catch(error) {
            console.log(error); 
        };
    };

    return (
        <div className="book">
            {book.cover && <img src={book.cover} alt="book cover" />}
            <h2>{book.title}</h2>
            <p>{book.description}</p>
            <span>{book.price}</span>
            <button className="btn btn-delete" onClick={() => handleDelete(book.id)}>Delete</button>
            <button className="btn btn-update"><Link to={`/books/${book.id}`}>Update</Link></button>
        </div>
    )
}

export default Book