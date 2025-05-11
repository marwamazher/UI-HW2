import './Home.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Picture from '../assets/images/london.jpg';
import Food1 from '../assets/images/bargeeast.webp';
import Food2 from '../assets/images/danslenoir.webp';
import Food3 from '../assets/images/sastro.webp';
import Food4 from '../assets/images/murderexpress.jpeg';
import Culture1 from '../assets/images/shakespeare.jpg';
import Culture2 from '../assets/images/vangogh.jpeg';
import Culture3 from '../assets/images/gallery.jpg';
import Culture4 from '../assets/images/opera.jpg';

// home page
function Index() {

  // setting images for slideshow
  const foodImages = [Food1, Food2, Food3, Food4];
  const cultureImages = [Culture1, Culture2, Culture3, Culture4];

  // to track currently displayed image 
  const [foodIndex, setFoodIndex] = useState(0);
  const [cultureIndex, setCultureIndex] = useState(0);

  // making timers for slide show images
  useEffect(() => {
    const foodTimer = setInterval(() => {
      setFoodIndex((prev) => (prev + 1) % foodImages.length);
    }, 3000);

    const cultureTimer = setInterval(() => {
      setCultureIndex((prev) => (prev + 1) % cultureImages.length);
    }, 3000);

    return () => {
      clearInterval(foodTimer);
      clearInterval(cultureTimer);
    };
  }, []);

  return (
    <div>
      {/* welcome section with title, short description and image */}
      <div className="welcome-section">
        <img src={Picture} alt="London" className="london-image" />
        <div className="welcome-text">
          <h1>Welcome to London Break!</h1>
          <p>Plan your perfect weekend break to London.</p>
        </div>
      </div>

      {/* card components with slide shows leading to respective pages */}
      <div className="cards-container">
        <Link to="/unique-food" className="link-card">
          <h2>Unique Food</h2>
          <img
            src={foodImages[foodIndex]}
            alt="Unique food"
            className="slideshow-img"
          />
          <p>Explore quirky dining spots like dining in the dark, murder mystery dinners, and more.</p>
        </Link>

        <Link to="/art-culture" className="link-card">
          <h2>Art & Culture</h2>
          <img
            src={cultureImages[cultureIndex]}
            alt="Art and culture"
            className="slideshow-img"
          />
          <p>Bored and don't know what to do? Find the best art galleries, live performances, and cultural events in the city.</p>
        </Link>
      </div>
    </div>
  );
}

export default Index;
