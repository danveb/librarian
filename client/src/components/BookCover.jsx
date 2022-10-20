import { Link } from "react-router-dom";
import "../styles/BookCover.css"; 

const BookCover = ({ book }) => {
    return (
        <>
            <div className="bookCover">
                <Link to={`/library/${book.id}`}>
                    {book.cover && <img src={book.cover} alt="book cover" />}
                </Link>
                <p>{book.title}</p>
                {/* add later to books table -> editorial */}
                {/* <p>{book.editorial}</p> */}
            </div>
        </>
    )
}

export default BookCover