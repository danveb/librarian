import Jumbotron from "../components/Jumbotron";
import { jumbotronContact } from "../constants/jumbotron";
import "../styles/Contact.css"; 
import { FaGithub, FaLinkedinIn, FaLaptopCode } from "react-icons/fa"; 

const Contact = () => {  
    return (
        <>
            {jumbotronContact.map((item) => (
                <Jumbotron key={item.id} title={item.title} />
            ))}
            <div className="contact">
                <div className="contact__wrapper">
                    <h1 className="contact__title">I'm Danny, a frontend developer passionate of web development in React. </h1>
                    <p className="contact__subtitle">I'm open to discussing new opportunities to work together. Feel free to check my GitHub and Portfolio!</p>
                </div>
                <div className="contact__socials">
                    <a href="https://portfolio-dbae.netlify.app" target="_blank" rel="noreferrer noopener"><FaLaptopCode /></a>
                    <a href="https://github.com/danveb" target="_blank" rel="noreferrer noopener"><FaGithub /></a>
                    <a href="https://linkedin.com/in/daniel-eze-bae" target="_blank" rel="noreferrer noopener"><FaLinkedinIn /></a>
                </div>
            </div>
        </>
    )
}

export default Contact