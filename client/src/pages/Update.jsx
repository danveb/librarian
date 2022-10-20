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
        cover: "",
        price: 0
    });

    // destructure formData 
    const { title, description, cover, price } = formData; 

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
                            <label htmlFor="title">Title</label>
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
                            <label htmlFor="description">Description</label>
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
                            <label htmlFor="cover">Cover</label>
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
                            <label htmlFor="price">Price</label>
                            <input 
                                id="price"
                                type="number"
                                name="price"
                                value={price}
                                onChange={handleChange}
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