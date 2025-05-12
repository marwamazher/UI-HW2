import { useState, useEffect, useRef } from 'react';
import './DropDown.css';

// drop-down filter for unique food, art and culture, and reviews
const DropDownSort = ({ sortOptions, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // close drop down if user clicks outside the box
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // handle user clicking inside checkbox, (check or uncheck box)
  const handleCheckboxChange = (optionValue) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button
        type="button"
        className="dropdown-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        Sort By:
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          {sortOptions.map((option) => (
            <button
              key={option.value}
              className="dropdown-item"
              onClick={() => handleCheckboxChange(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDownSort;
