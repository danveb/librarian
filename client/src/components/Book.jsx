const Book = ({ book }) => {
    return (
        <div className="book">
            <h2>{book.title}</h2>
            <p>{book.description}</p>
            <img src={book.cover} alt="book cover" />
        </div>
    )
}

export default Book