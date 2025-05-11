import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import './StarRating.css';

// star component for reviews section 
const StarRating = ({ onRatingSelect, selectedRating }) => {
  const [stars, setStars] = useState(null);
  const [hover, setHover] = useState(null);

  //  handle clicking on stars 
  const handleClick = (selectedStars) => {
    setStars(selectedStars);
    if (onRatingSelect) {
      onRatingSelect(selectedStars);
    }
  };

  // update stars to properly display or clear selection 
  useEffect(() => {
    setStars(selectedRating);
  }, [selectedRating]);

  return (
    <div className="star-rating">
      {/* create array of 5 elements for stars */}
      {[...Array(5)].map((_, index) => {
        const currentStars = index + 1;

        return (

          <label key={index}>
            {/* radio button for star selection */}
            <input 
              type="radio"
              name="stars"
              value={currentStars}
              onClick={() => handleClick(currentStars)}
            />
            {/* star icon, change colour based on selection/hover */}
            <FaStar 
              className="star" 
              color={currentStars <= (hover || stars) ? "#ffc107" : "#e4e5e9"}
              size={30}
              onMouseEnter={() => setHover(currentStars)}
              onMouseLeave={() => setHover(null)}
              onClick={() => handleClick(currentStars)} 
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
