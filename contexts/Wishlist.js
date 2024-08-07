import React, { useContext, useState, useEffect } from 'react';
import { StoreContext } from '../contexts/StoreContext';
import { useNavigate } from 'react-router-dom';
import '../styles/Wishlist.css';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <header className="header1">
      <h1>SpecGo</h1>
      <div>
        <button className="home-button" onClick={() => navigate('/')}>
          Home
        </button>
        <button className="home-button" onClick={() => navigate('/wishlist')}>
          Wishlist
        </button>
        <button className="home-button" onClick={() => navigate('/cart')}>
          Cart
        </button>
      </div>
    </header>
  );
};

export const Wishlist = () => {
  const { wishlist, addToCart, removeFromWishlist } = useContext(StoreContext);
  const navigate = useNavigate();
  const [messageQueue, setMessageQueue] = useState([]);
  const [currentMessage, setCurrentMessage] = useState(null);

  useEffect(() => {
    if (messageQueue.length > 0 && !currentMessage) {
      setCurrentMessage(messageQueue[0]);
      setMessageQueue((prevQueue) => prevQueue.slice(1));
    }
  }, [messageQueue, currentMessage]);

  useEffect(() => {
    if (currentMessage) {
      const timer = setTimeout(() => {
        setCurrentMessage(null);
      }, 3000); // Display each message for 3 seconds
      return () => clearTimeout(timer);
    }
  }, [currentMessage]);

  const handleAddToCart = (product) => {
    addToCart(product);
    setMessageQueue((prevQueue) => [
      ...prevQueue,
      `${product.name} added to cart!`,
    ]);
  };

  return (
    <div className="wishlist-container">
      <Navbar />
      <div className="subheader">
        <h2>My Wishlist ❤️</h2>
      </div>

      <main className="wishlist-page">
        <div className="wishlist-grid">
          {wishlist.map((product) => (
            <div className="product-card1" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Size: {product.size}</p>
              <p>Color: {product.color}</p>
              <p>Shape: {product.shape}</p>
              <p>₹{product.price}</p>
              <button
                className="add-to-cart"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
              <button
                className="remove-from-wishlist"
                onClick={() => removeFromWishlist(product.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </main>

      {currentMessage && (
        <div className="floating-message">
          {currentMessage}
        </div>
      )}
    </div>
  );
};
