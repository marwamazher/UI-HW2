import './Card.css';
import { Link } from 'react-router-dom';


function Card({ name, image, category, rating, description, experience, link }) {
    return (
        <Link to={`/${link}`} className="card-link">
        <div className="card">
            <img src={image} alt={name} />
            <h1>{name}</h1>
            <div className="row">
                <p>{category}</p>
                <p>|</p>
                <p>{rating} ⭐</p>
            </div>
            <p>{description}</p>
        </div>
    </Link>
    );
}

export default Card;
