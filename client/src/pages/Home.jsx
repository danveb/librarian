import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Welcome to Librarian</h1>
            <button className="btn"><Link to="/books">Go to Library</Link></button>
        </div>
    )
}

export default Home