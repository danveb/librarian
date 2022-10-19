import { Link } from "react-router-dom";
import "../styles/Home.css"; 
import librarian from "../assets/librarian.jpg"; 

const Home = () => {
    return (
        <div className="home">      
            <img className="home__librarian" src={librarian} alt="librarian main" />      
            <h1 className="home__title">Welcome to Librarian</h1>
            <p className="home__subtitle">Powerful, extensible toolkit for those who share the passion of books.</p>
            <button className="btn btn-main">
                <Link to="/library">Go to Library</Link>
            </button>
        </div>
    )
}

export default Home