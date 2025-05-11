import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Card from '../components/Card.jsx';
import '../components/Card.css';
import Museum from '../assets/images/britmuseum.jpg';
import Gallery from '../assets/images/gallery.jpg';
import VanGogh from '../assets/images/vangogh.jpeg';
import Shakespeare from '../assets/images/shakespeare.jpg';
import Opera from '../assets/images/opera.jpg';
import Filter from '../components/DropDownFilterActivities.jsx';
import Sort from '../components/DropDownSort.jsx';
import './ArtAndCulture.css';

// art and culture page
function ArtAndCulture() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const recommendedCategory = queryParams.get('category');
  const [search, setSearch] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);
  
  // dataset for activities, storing for default sort option
  const originalActivities = [
    {
      name: "Shakespeare's Globe",
      image: Shakespeare,
      category: 'Theatre',
      description: 'The Globe Theatre, for which William Shakespeare wrote his plays.',
      link: 'shakespeares-globe',
      rating: 4.6,
    },
    {
      name: 'Van Gogh Exhibition',
      image: VanGogh,
      category: 'Art',
      description: 'A digital art gallery that invites you to step into the universe of Vincent van Gogh.',
      link: 'van-gogh-exhibition',
      rating: 4.2,
    },
    {
      name: 'The British Museum',
      image: Museum,
      category: 'History',
      description: 'A public museum dedicated to human history, art and culture.',
      link: 'british-museum',
      rating: 4.7,
    },
    {
      name: 'The National Gallery',
      image: Gallery,
      category: 'Art',
      description: 'Showcasing one of the greatest collections of paintings in the world.',
      link: 'national-gallery',
      rating: 4.7,
    },
    {
      name: 'The Royal Opera House',
      image: Opera,
      category: 'Art',
      description: 'Opera, ballet, and classical performances in Covent Garden.',
      link: 'royal-opera',
      rating: 4.8,
    },
  ];
  
  
  const [activities, setActivities] = useState([...originalActivities]);

  const navigate = useNavigate();

  // filter options
  const myCategories = [
    { label: 'Art', value: 'Art' },
    { label: 'History', value: 'History' },
    { label: 'Theatre', value: 'Theatre' },
  ];

  // sort options
  const sortOptions = [
    { label: 'Default', value: 'default' },
    { label: 'Ascending', value: 'asc' },
    { label: 'Descending', value: 'desc' },
    { label: 'By Rating (High to Low)', value: 'ratingdesc' },
    { label: 'By Rating (Low to High)', value: 'ratingasc' },
  ];

  // handling sort options
  const handleSortChange = (optionValue) => {
    let sortedActivities = [];
    // default order
    if (optionValue === 'default') {
      sortedActivities = [...originalActivities];
      // ascending
    } else if (optionValue === 'asc') {
      sortedActivities = [...activities].sort((a, b) => a.name.localeCompare(b.name));
      // descending
    } else if (optionValue === 'desc') {
      sortedActivities = [...activities].sort((a, b) => b.name.localeCompare(a.name));
      // low to high rating
    } else if (optionValue === 'ratingasc') {
      sortedActivities = [...activities].sort((a, b) => a.rating - b.rating);
      // high to low rating
    } else if (optionValue === 'ratingdesc') {
      sortedActivities = [...activities].sort((a, b) => b.rating - a.rating);
    }
    
    // set activities based on option selected for sorting
    setActivities(sortedActivities);
  };

  // filter activities with search bar and filter drop-down
  const filteredActivities = activities.filter((activity) => {
    const matchesSearch = activity.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      (selectedOptions.length === 0 && !recommendedCategory) ||
      selectedOptions.includes(activity.category) ||
      activity.category === recommendedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    
    <div>
      {/* title, changes based on if ur on recommendations page or just art and culture */}
      <h1 style={{ textAlign: 'center', fontSize: '35px', color: '#3b000e' }}>
        {recommendedCategory ? 'Your Recommendations' : 'Art and Culture'}
      </h1>

      {/* button changes from quiz button to go back depending on if ur on recommendations page or just art and culture */}
      {!recommendedCategory ? (
        <>
          <p style={{ textAlign: 'center', marginBottom: '20px', marginTop: '20px' }}>
            Not sure what you want to do?
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px', marginTop: '20px' }}>
            <button
              className="quiz-button"
              onClick={() => navigate('/quiz')}
            >
              Take A Quiz!
            </button>
          </div>
        </>
      ) : (
        <div style={{marginLeft:"500px", marginBottom: '20px', marginTop: '20px' }}>
          <button
            className="go-back-button"
            onClick={() => navigate('/art-and-culture')}
          >
            Go Back
          </button>
        </div>
      )}

      {/* search bar */}
      <div style={{ marginBottom: '20px', marginLeft: '230px' }}>
        <input
          type="text"
          placeholder="Search activities"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: '10px',
            margin: '20px',
            width: '500px',
          }}
        />

        {/* sorting */}
        <Sort sortOptions={sortOptions} onChange={handleSortChange} />

        {/* filtering */}
        <Filter
          options={myCategories}
          selectedOptions={selectedOptions}
          onChange={setSelectedOptions}
          activities={activities}
        />
      </div>

      {/* card components */}
      <div className="places-list">
        {filteredActivities.map((activity, index) => (
          <Card
            key={index}
            name={activity.name}
            image={activity.image}
            category={activity.category}
            description={activity.description}
            rating={activity.rating}
            link={activity.link}
          />
        ))}
      </div>
    </div>
  );
}

export default ArtAndCulture;