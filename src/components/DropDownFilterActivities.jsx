import { useState, useEffect, useRef } from 'react';
import './DropDown.css';

// drop-down filter for art and culture activities
const DropDownFilterActivities = ({ options, selectedOptions, onChange, activities }) => {
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
    if (selectedOptions.includes(optionValue)) {
      onChange(selectedOptions.filter((val) => val !== optionValue));
    } else {
      onChange([...selectedOptions, optionValue]);
    }
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
          {options.map((option) => (
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
      )}
    </div>
  );
};

export default DropDownFilterActivities;
