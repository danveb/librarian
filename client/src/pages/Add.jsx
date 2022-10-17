import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Add = () => {
    // API_URL
    const API_URL = process.env.REACT_APP_API_URL; 

    // useNavigate
    const navigate = useNavigate(); 

    // useState 
    const [formData, setFormData] = useState({
        title: "",
        description: "", 
        cover: "",
        price: 0, 
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
        const newBook = {
            title, 
            description, 
            cover, 
            price: +price, 
        }; 
        // console.log("submitted new book"); 
        try {
            const response = await axios.post(`${API_URL}/api/books`, newBook);
            console.log(response.data); 
            navigate("/");
        } catch(error) {
            console.log(error); 
        };
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Add new book</h3>
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
            <button className="btn btn-add">Submit</button>
        </form>
    )
}

export default Add