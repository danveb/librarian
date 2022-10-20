import "../styles/Jumbotron.css"; 

const Jumbotron = ({ title, text }) => {
    return (
        <div className="jumbotron">
            <div className="jumbotron__wrapper">
                <h1>{title}</h1>
                <p>{text}</p>
            </div>  
        </div>
    )
}

export default Jumbotron