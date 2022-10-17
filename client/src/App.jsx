import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BookList from "./pages/BookList";
import Add from "./pages/Add";
import Update from "./pages/Update";
import "./App.css"; 

const App = () => {
    return (
        <div className="app">
            <Router>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/books" element={<BookList />}/>
                    <Route path="/add" element={<Add />}/>
                    <Route path="/books/:id" element={<Update />}/>
                </Routes>
            </Router>
        </div>
    )
}

export default App