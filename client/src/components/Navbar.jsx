import { Link } from "react-router-dom";
import { links } from "../constants/links";
import "../styles/Navbar.css"; 

const Navbar = ({ menuOpen, setMenuOpen }) => {
    return (
        <div className={"navbar " + (menuOpen && "active")}>
            <div className="navbar__hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="navbar__links">
                <ul>
                    {links.map((link) => (
                        <li key={link.id}>
                            <Link to={link.url}>{link.text}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="navbar__logo">
                <Link to="/">Librarian</Link>
            </div>
        </div>
    )
}

export default Navbar