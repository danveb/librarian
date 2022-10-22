import axios from "axios";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Jumbotron from "../components/Jumbotron";
import { jumbotronUpdateBook } from "../constants/jumbotron";
import "../styles/Update.css"; 

const Update = () => {
    // API_URL
    const API_URL = process.env.REACT_APP_API_URL; 

    // useNavigate
    const navigate = useNavigate(); 

    // useLocation
    const location = useLocation(); 
    const bookId = location.pathname.split("/")[2]; 

    // useState 
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
        price: 0, 
        author: "",
        publisher: "", 
    });

    // destructure formData 
    const { title, description, cover, price, author, publisher } = formData; 

    // handleChange
    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev, 
            [e.target.name]: e.target.value, 
        }));
    };

    // handleSubmit
    // submit to backend
    const handleSubmit = async (e) => {
        e.preventDefault(); 
        const updatedBook = {
            title, 
            description, 
            cover, 
            price: +price, 
            author, 
            publisher, 
        }; 
        // console.log("updated existing book"); 
        try {
            const response = await axios.put(`${API_URL}/api/books/${bookId}`, updatedBook);
            console.log(response.data); 
            navigate("/");
        } catch(error) {
            console.log(error); 
        };
    };

    return (
        <>
            {jumbotronUpdateBook.map((item) => (
                <Jumbotron key={item.id} title={item.title} text={item.text} />
            ))}
            <div className="updateForm">
                <div className="updateForm__wrapper">
                    <form onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label htmlFor="title">Title (max 255 characters)</label>
                            <input 
                                id="title"
                                type="text"
                                name="title"
                                value={title}
                                onChange={handleChange}
                                placeholder="Enter title..."
                            />
                        </div>
                        <div className="form-control">
                            <label htmlFor="description">Description (max 255 characters)</label>
                            <input 
                                id="description"
                                type="text"
                                name="description"
                                value={description}
                                onChange={handleChange}
                                placeholder="Enter description..."
                            />
                        </div>
                        <div className="form-control">
                            <label htmlFor="cover">Cover (default cover)</label>
                            <input 
                                id="cover"
                                type="text"
                                name="cover"
                                value={cover}
                                onChange={handleChange}
                                placeholder="Enter cover..."
                            />
                        </div>
                        <div className="form-control">
                            <label htmlFor="price">Price (default price)</label>
                            <input 
                                id="price"
                                type="number"
                                name="price"
                                value={price}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-control">
                            <label htmlFor="author">Author</label>
                            <input 
                                id="author"
                                type="text"
                                name="author"
                                value={author}
                                onChange={handleChange}
                                placeholder="Enter author..."
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label htmlFor="publisher">Publisher</label>
                            <input 
                                id="publisher"
                                type="text"
                                name="publisher"
                                value={publisher}
                                onChange={handleChange}
                                placeholder="Enter publisher..."
                                required
                            />
                        </div>
                        <button className="btn btn-update">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Update