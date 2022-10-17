import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookList from "./pages/BookList";

const App = () => {
    return (
        <div className="app">
            <Router>
                <Routes>
                    <Route path="/" element={<BookList />}/>
                </Routes>
            </Router>
        </div>
    )
}

export default App