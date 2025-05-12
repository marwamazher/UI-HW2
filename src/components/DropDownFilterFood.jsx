import { useState, useEffect, useRef } from 'react';
import './DropDown.css';
import { useNavigate } from 'react-router-dom';

// drop-down filter for unique food options
const DropDownFilterFood = ({ categories, options, selectedOptions, onChange, restaurants }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // close drop down if user clicks outside the box
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // handle user clicking inside checkbox, (check or uncheck box)
  const handleCheckboxChange = (optionValue) => {
    if (selectedOptions.includes(optionValue)) {
      onChange(selectedOptions.filter((val) => val !== optionValue));
    } else {
      onChange([...selectedOptions, optionValue]);
    }
  };

  // handle user clicking on surprise button, redirects user to random restaurant page.
  const handleSurpriseClick = () => {
    const randomRestaurant = restaurants[Math.floor(Math.random() * restaurants.length)];
    navigate(`/${randomRestaurant.link}`); 
  };

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button
        type="button"
        className="dropdown-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOptions.length > 0
          ? `${selectedOptions.length} selected`
          : 'Filter By:'}
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          {categories.map((category) => (
            <div key={category.label}>
              <div className="dropdown-item">
                <label>{category.label}</label>
              </div>
              {options .filter(option => option.category === category.value).map((option) => (
                <div className="dropdown-item" key={option.value}>
                  <input
                    type="checkbox"
                    checked={selectedOptions.includes(option.value)}
                    onChange={() => handleCheckboxChange(option.value)}
                  />
                  <label>{option.label}</label>
                </div>
              ))}
            </div>
          ))}
          <div className="surprise-button">
            <button
            onClick={handleSurpriseClick}>Surprise me!</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDownFilterFood;
