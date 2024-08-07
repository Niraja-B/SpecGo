// Review.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Review.css';

const Review = () => {
  const navigate = useNavigate();

  const [reviews, setReviews] = useState(() => {
    const savedReviews = localStorage.getItem('reviews');
    return savedReviews ? JSON.parse(savedReviews) : [];
  });

  const [currentReview, setCurrentReview] = useState({
    name: '',
    rating: 0,
    comment: '',
    images: [],
    imageUrls: [],
  });

  useEffect(() => {
    localStorage.setItem('reviews', JSON.stringify(reviews));
  }, [reviews]);

  const handleRatingChange = (newRating) => {
    setCurrentReview((prev) => ({ ...prev, rating: newRating }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentReview((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setCurrentReview((prev) => ({
      ...prev,
      images: [...prev.images, ...files],
      imageUrls: [...prev.imageUrls, ...imageUrls],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setReviews((prevReviews) => [...prevReviews, currentReview]);
    setCurrentReview({
      name: '',
      rating: 0,
      comment: '',
      images: [],
      imageUrls: [],
    });
  };

  const handleDeleteReview = (index) => {
    setReviews((prevReviews) => prevReviews.filter((_, i) => i !== index));
  };

  return (
    <div className="review-page">
      <div className="review-navbar">
        <div className="review-navbar-left">SpecGo</div>
        <div className="review-navbar-right">
          <button className="review-nav-button" onClick={() => navigate('/')}>Home</button>
        </div>
      </div>
      <div className="review-container">
        <div className="review-form">
          <h2>Rate and Review Product</h2>
          <form onSubmit={handleSubmit}>
            <div className="review-form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={currentReview.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="review-form-group">
              <label>Rating</label>
              <div className="review-star-rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`review-star ${currentReview.rating >= star ? 'selected' : ''}`}
                    onClick={() => handleRatingChange(star)}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
            <div className="review-form-group">
              <label>Comment</label>
              <textarea
                name="comment"
                value={currentReview.comment}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="review-form-group">
              <label>Upload Images</label>
              <input
                type="file"
                multiple
                onChange={handleImageChange}
              />
              <div className="review-image-previews">
                {currentReview.imageUrls && currentReview.imageUrls.map((url, index) => (
                  <img
                    key={index}
                    src={url}
                    alt={`Preview ${index}`}
                    className="review-image-preview"
                  />
                ))}
              </div>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="review-list">
          <h2>Reviews</h2>
          {reviews.map((review, index) => (
            <div key={index} className="review-item">
              <button className="review-delete-button" onClick={() => handleDeleteReview(index)}>
                ✖
              </button>
              <h3>{review.name}</h3>
              <div className="review-star-rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className={`review-star ${review.rating >= star ? 'selected' : ''}`}>
                    ★
                  </span>
                ))}
              </div>
              <p>{review.comment}</p>
              <div className="review-images">
                {review.imageUrls && review.imageUrls.map((url, i) => (
                  <img
                    key={i}
                    src={url}
                    alt={`Review Image ${i}`}
                    className="review-review-image"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
