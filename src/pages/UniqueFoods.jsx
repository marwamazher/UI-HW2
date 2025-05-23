import { useState } from 'react';
import Card from '../components/Card.jsx';
import '../components/Card.css';
import './UniqueFoods.css'
import Barge from '../assets/images/bargeeast.webp';
import Sarastro from '../assets/images/sastro.webp';
import PickNCheese from '../assets/images/pickncheese.webp';
import Bustronome from '../assets/images/bustronome.webp';
import DansNoir from '../assets/images/danslenoir.webp';
import MurderExp from '../assets/images/murderexpress.jpeg';
import Filter from '../components/DropDownFilterFood.jsx';
import Sort from '../components/DropDownSort.jsx';


function UniqueFoods() {
  const [search, setSearch] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [restaurants, setRestaurants] = useState([
    {
      name: 'Dans Le Noir',
      image: DansNoir,
      cuisine: 'French',
      rating: '5',
      description: 'A unique experience where you dine in complete darkness.',
      link: 'dans-le-noir',
      dietary: ['vegan', 'vegetarian'],
      experience: ['immersive']
    },
    {
      name: 'The Murdér Express',
      image: MurderExp,
      cuisine: 'British',
      rating: '4.5',
      description: 'An immersive, theatrical dining experience with a 1920s murder mystery.',
      link: 'murder-express',
      dietary:['vegetarian'],
      experience: ['Immersive','Theatrical']
    },
    {
      name: 'Barge East',
      image: Barge,
      cuisine: 'British',
      rating: '4.3',
      description: 'A floating dining experience on a Historic 125-Year-Old Barge.',
      link: 'barge-east',
      dietary: [],
      experience: ['immersive']
    },
    {
      name: 'Sarastro',
      image: Sarastro,
      cuisine: 'Mediterranean',
      rating: '4.3',
      description: "Named after a character in Mozart's Magic Flute. Special musical events on different days of the week.",
      link: 'sarastro',
      dietary: ['vegetarian'],
      experience: ['entertainment']
    },
    {
      name: 'Pick & Cheese',
      image: PickNCheese,
      cuisine: 'British',
      rating: '4.3',
      description: "The world's first cheese conveyor belt restaurant in the heart of London's West End.",
      link: 'pick-n-cheese',
      dietary: ['vegetarian'],
    },
    {
      name: 'Bustronome',
      image: Bustronome,
      cuisine: 'French',
      rating: '4.5',
      description: 'A dining experience while exploring London on a top-of-the-range double-decker bus with a fully glazed roof. ',
      link: 'bustronome',
    },
    
  ]);

  const myCategories = [
    { label: 'Cuisine', value: 'cuisine' },
    { label: 'Dietary', value: 'dietary' },
    { label: 'Experience Type', value: 'experience' },
  ];

  const options = [
    { label: 'French', value: 'french', category: 'cuisine',},
    { label: 'British', value: 'british', category: 'cuisine' },
    { label: 'Mediterranean', value: 'mediterranean', category: 'cuisine' },
    { label: 'Italian', value: 'italian', category: 'cuisine' },
    { label: 'Cafe', value: 'cafe', category: 'cuisine' },
    { label: 'Japanese', value: 'japanese', category: 'cuisine' },
    { label: 'Breakfast', value: 'breakfast', category: 'cuisine' },
    { label: 'Halal', value: 'halal', category: 'dietary' },
    { label: 'Vegan', value: 'vegan', category: 'dietary' },
    { label: 'Vegetarian', value: 'vegetarian', category: 'dietary' },
    { label: 'Immersive', value: 'immersive', category: 'experience' },
    { label: 'Spectacle & Entertainment', value: 'entertainment', category: 'experience' },
    { label: 'Theatrical', value: 'theatrical', category: 'experience' },
  ];

  const sortOptions = [
    { label: 'Default', value: 'default' },
    { label: 'Ascending', value: 'asc' },
    { label: 'Descending', value: 'desc' },
    { label: 'By Rating (High to Low)', value: 'ratingasc' },
    { label: 'By Rating (Low to High)', value: 'ratingdesc' },
  ];

  const [originalRestaurants] = useState([...restaurants]);

  const filteredRestaurants = restaurants.filter((restaurant) => {
    const matchesSearch = restaurant.name
      .toLowerCase()
      .includes(search.toLowerCase());
    if (selectedOptions.length === 0) {
      return matchesSearch;
    }
    const selectedCuisines = selectedOptions.filter((selected) =>
      options.find((option) => option.value === selected && option.category === 'cuisine')
    );
    const selectedDietary = selectedOptions.filter((selected) =>
      options.find((option) => option.value === selected && option.category === 'dietary')
    );
    const selectedExperiences = selectedOptions.filter((selected) =>
      options.find((option) => option.value === selected && option.category === 'experience')
    );
    const matchesCuisine =
      selectedCuisines.length === 0 ||
      selectedCuisines.includes(restaurant.cuisine.toLowerCase());
    const matchesDietary =
      selectedDietary.length === 0 ||
      selectedDietary.some((selected) => restaurant.dietary && restaurant.dietary.includes(selected));
    const matchesExperience =
      selectedExperiences.length === 0 ||
      selectedExperiences.some((selected) => restaurant.experience && restaurant.experience.includes(selected));
    return matchesSearch && matchesCuisine && matchesDietary && matchesExperience;
  });

  const handleSortChange = (optionValue) => {
    let sortedRestaurants;
    if (optionValue === 'default') {
      sortedRestaurants = [...originalRestaurants];
    } else if (optionValue === 'asc') {
      sortedRestaurants = [...restaurants].sort((a, b) => a.name.localeCompare(b.name));
    } else if (optionValue === 'desc') {
      sortedRestaurants = [...restaurants].sort((a, b) => b.name.localeCompare(a.name));
    } else if (optionValue === 'ratingasc') {
      sortedRestaurants = [...restaurants].sort((a, b) => b.rating - a.rating);
    }
    else if (optionValue === 'ratingdesc') {
      sortedRestaurants = [...restaurants].sort((a, b) => a.rating - b.rating);
    }
    setRestaurants(sortedRestaurants);
  };

  return (
    <div>
      <h1
        style={{ textAlign: 'center', fontSize: '35px', color: '#3b000e' }}
      >
        Unique Food
      </h1>
      <div style={{ marginBottom: '20px', marginLeft: '230px'  }}>
        <input
          type="text"
          placeholder="Search restaurants"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: '10px',
            margin: '20px',
            width: '500px',
          }}
        />
        <Sort sortOptions={sortOptions} onChange={handleSortChange} />
        <Filter
          categories={myCategories}
          options={options}
          selectedOptions={selectedOptions}
          onChange={setSelectedOptions}
          restaurants={restaurants}
        />
      </div>
      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant, index) => (
          <Card
            key={index}
            name={restaurant.name}
            image={restaurant.image}
            category={restaurant.cuisine}
            rating={restaurant.rating}
            description={restaurant.description}
            link={restaurant.link}
          />
        ))}
      </div>
    </div>
  );
}

export default UniqueFoods;