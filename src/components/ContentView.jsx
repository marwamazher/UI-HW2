import React, { useState } from 'react';
import './ContentView.css';
import StarRating from './StarRating';
import { FaStar } from "react-icons/fa";
import DropDownSort from './DropDownSort';

//function for viewing restaurants or places
function ContentView({ name, image, address, openingTimes, description, category, rating, experienceType, link, mapSrc }) {
    const [reviews, setReviews] = useState([]);
    const [newReview, setNewReview] = useState('');
    const [newReviewTitle, setNewReviewTitle] = useState('');
    const [selectedRating, setSelectedRating] = useState(null);
    const [sortOption, setSortOption] = useState('');

    //handling submissions of reviews, checks all required fields are filled before adding to reviews
    const handleReviewSubmit = () => {
        if (newReviewTitle.trim() && newReview.trim() && selectedRating) {
            const newReviewObj = {
                title: newReviewTitle,
                text: newReview,
                rating: selectedRating,
            };
            setReviews([...reviews, newReviewObj]);

            //resets form after submission
            setNewReview('');
            setNewReviewTitle('');
            setSelectedRating(null);
        }
    };

    //options in drop down for sorting
    const sortOptions = [
        { value: 'high-to-low', label: 'Rating: High to Low' },
        { value: 'low-to-high', label: 'Rating: Low to High' },
    ];

    //sort reviews based on chosen option
    const sortedReviews = [...reviews].sort((a, b) => {
        if (sortOption === 'high-to-low') {
            return b.rating - a.rating;
        } else if (sortOption === 'low-to-high') {
            return a.rating - b.rating;
        }
        return 0;
    });

    return (
        <div className="view">

             {/* image and categories display */}
            <div className="display">
                <img src={image} alt={name} />
                <p className="categories">{category} | {rating}⭐ | {experienceType}</p>
            </div>

             {/* information about place */}
            <div className="info-box">
                <h1 style={{ fontSize: '20px' }}>{name}</h1>
                <p>{address}</p>
                <p>Opening Times: {openingTimes}</p>
                <p>{description}</p>
                <button onClick={() => window.open(link, '_blank')}>Go to Website</button>
            </div>

             {/* responsive map */}
            <div className="map-responsive">
                <iframe
                    src={mapSrc}
                    width="600"
                    height="450"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Responsive Google Map"
                ></iframe>
            </div>

             {/* reviews section */}
            <div className="view-reviews">
                <h2>Reviews</h2>

                {/* sorting for reviews */}
                <div className="sort-dropdown-container">
                    <DropDownSort
                    sortOptions={sortOptions}
                    onChange={(value) => setSortOption(value)}
                    />
                </div>

                 {/* display reviews, if no reviews lets user know */}
                <div className="reviews-list">
                    {sortedReviews.length === 0 ? (
                        <p>No reviews yet. Be the first to review!</p>
                    ) : (
                        sortedReviews.map((review, index) => (
                            <div key={index} className="review-item">
                                <div className="review-stars">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <FaStar key={i} color="#ffc107" size={20} />
                                    ))}
                                </div>
                                <h4 className="review-title">{review.title}</h4>
                                <p>{review.text}</p>
                            </div>
                        ))
                    )}
                </div>

                 {/* submission form for reviews */}
                <StarRating 
                    onRatingSelect={(rating) => setSelectedRating(rating)} 
                    selectedRating={selectedRating}
                />

                <input
                    type="text"
                    value={newReviewTitle}
                    onChange={(e) => setNewReviewTitle(e.target.value)}
                    placeholder="Review title"
                    className="review-title-input"
                />

                <textarea
                    value={newReview}
                    onChange={(e) => setNewReview(e.target.value)}
                    placeholder="Write your review..."
                    className="review-textarea"
                ></textarea>

                <button className="submit-review-btn" onClick={handleReviewSubmit}>
                    Submit Review
                </button>
            </div>
        </div>
    );
}

export default ContentView;
