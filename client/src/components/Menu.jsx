import { Link } from "react-router-dom";
import { links } from "../constants/links"; 
import "../styles/Menu.css"; 

const Menu = ({ menuOpen, setMenuOpen }) => {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                {links.map((link) => (
                    <li key={link.id} onClick={() => setMenuOpen(!menuOpen)}>
                        <Link to={link.url}>{link.text}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Menu