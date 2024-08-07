import React, { useState } from 'react';
import '../styles/ProductInfo.css';

const FastTrack = () => {
  const [mainImage, setMainImage] = useState("https://d3995ea24pmi7m.cloudfront.net/ft-media/catalog/product/f/t/ft1152ufp3_4_lar.jpg");

  const thumbnails = [
    "https://d3995ea24pmi7m.cloudfront.net/ft-media/catalog/product/f/t/ft1152ufp3_4_lar.jpg",
    "https://m.media-amazon.com/images/I/31RpASt6gbL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg",
    "https://d3995ea24pmi7m.cloudfront.net/media/catalog/product/f/t/ft1127mfp1_1_lar.jpg"
  ];

  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <div>
      <nav className="info-navbarinfo">
        <button className="info-back-button" onClick={handleBackClick}>Back</button>
      </nav>
      <div className="info-product-info-container">
        <div className="info-product-details">
          <div className="info-product-images">
            <img src={mainImage} alt="Main Glasses" className="info-main-image" />
            <div className="info-thumbnail-images">
              {thumbnails.map((thumb, index) => (
                <img 
                  key={index} 
                  src={thumb} 
                  alt={`Thumbnail ${index + 1}`} 
                  className="info-thumbnail-image" 
                  onClick={() => setMainImage(thumb)} 
                />
              ))}
            </div>
          </div>
          <div className="info-product-info">
            <h1>Fastrack Oval</h1>
            <p>Stylish Oval Rimmed Eyeglasses</p>
            <p>Size: Small</p>
            <p>Color: Black</p>
            <p>Shape: Oval</p>
            <h2>₹1200</h2>
            <p>Inclusive of all taxes</p>
            <div className="info-promotion">
              <p>Free Lenses with every frame</p>
              <p>Limited Period Offer</p>
              <p>Get Free BLU Screen or Progressive Lenses!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FastTrack;
