import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import BookList from "./pages/BookList";
import Book from "./components/Book";
import Add from "./pages/Add";
import Update from "./pages/Update";
import "./App.css"; 
import Contact from "./pages/Contact";

const App = () => {
    const [menuOpen, setMenuOpen] = useState(false); 

    return (
        <div className="app">
            <Router>
                <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <Routes>
                    <Route path="/" element={<Home menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}/>
                    <Route path="/add" element={<Add menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}/>
                    <Route path="/library" element={<BookList menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}/>
                    <Route path="/library/:id" element={<Book menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}/>
                    <Route path="/library/:id/update" element={<Update menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}/>
                    <Route path="/contact" element={<Contact menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}/>
                </Routes>
            </Router>
        </div>
    )
}

export default App