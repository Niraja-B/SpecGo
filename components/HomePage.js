import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "../styles/HomePage.css";
import EyeglassDropdown from "./EyeglassDropdown";
import SignInForm from "./SignInForm";
import LoginForm from "./LoginForm";
import ShopByCategory from "./ShopByCategory";
import SunglassesDropdown from "./SunglassesDropdown";
import ContactLens from "./ContactLensDropdown";
import AccessoriesDropdown from "./AccessoriesDropdown";
import KidGlassesDropdown from "./KidGlassesDropdown";
import Offers from "./Offers";
import Footer from "./Footer";
import SearchBar from "./SearchBar";

const HomePage = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [hoveredDropdown, setHoveredDropdown] = useState(null);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const images = [
    "https://static5.lenskart.com/media/uploads/Desktopnew_1505.jpg",
    "https://static1.lenskart.com/media/desktop/img/June24/Crystal_acetate/web-option-1CAcetate.gif",
    "https://static5.lenskart.com/media/uploads/HooperPlay-UpdatedWebBanner.jpg",
  ];

  const offers = [
    {
      src: "https://via.placeholder.com/800x400.png?text=Offer+1",
      alt: "Flat 30% Off on Zeff Frames"
    },
    {
      src: "https://via.placeholder.com/800x400.png?text=Offer+2",
      alt: "Up to 20% Off on Aristo Frames"
    },
    {
      src: "https://via.placeholder.com/800x400.png?text=Offer+3",
      alt: "Buy 1 Get 1 Free on All Frames"
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000);

    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setLoggedIn(true);
    }

    return () => clearInterval(interval);
  }, [images.length]);

  const openSignIn = () => {
    setShowSignIn(true);
    setShowLogin(false);
  };

  const closeSignIn = () => setShowSignIn(false);

  const openLogin = () => {
    setShowLogin(true);
    setShowSignIn(false);
  };

  const closeLogin = () => setShowLogin(false);

  const handleLogin = (userData) => {
    setLoggedIn(true);
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    closeLogin();
  };

  const handleSignUp = (userData) => {
    setLoggedIn(true);
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    closeSignIn();
  };

  const ensureLoggedIn = (callback) => {
    if (loggedIn) {
      callback();
    } else {
      openLogin();
    }
  };

  const handleCartClick = () => ensureLoggedIn(() => navigate('/cart'));
  const handleWishlistClick = () => ensureLoggedIn(() => navigate('/wishlist'));
  const handleProfileClick = () => ensureLoggedIn(() => navigate('/profile'));
  const handleThreeDClick = () => ensureLoggedIn(() => navigate('/ThreeD'));
  const handleserviceClick = () => ensureLoggedIn(() => navigate('/service'));
  const handlelocationClick = () => ensureLoggedIn(() => navigate('/location'));
  const handleShapeClick = () => ensureLoggedIn(() => navigate('/Shape'));
  const handleStrainClick = () => ensureLoggedIn(() => navigate('/EyeStrain'));
  const handleTestClick = () => ensureLoggedIn(() => navigate('/App1'));
  const handleDropdownClick = (category) => {
    setActiveDropdown((prev) => (prev === category ? null : category));
  };

  const handleDropdownMouseEnter = (category) => {
    setHoveredDropdown(category);
  };

  const handleDropdownMouseLeave = () => {
    setHoveredDropdown(null);
  };

  const handleSearch = (query) => {
    if (query.toLowerCase().includes('sunglass')) {
      navigate('/sunglass-product');
    } else if (query.toLowerCase().includes('eyeglass')) {
      navigate('/eyeglass-product');
    }
  };

  return (
    <div className="homepage">
      <header className="header">
        <div className="logo">SpecGo</div>
        <nav>
          <ul className="nav-links">
            <li
              onMouseEnter={() => handleDropdownMouseEnter('eyeglasses')}
              onMouseLeave={handleDropdownMouseLeave}
            >
              <a
                href="#eyeglasses"
                onClick={() => handleDropdownClick('eyeglasses')}
              >
                Eyeglasses
              </a>
              {(activeDropdown === 'eyeglasses' || hoveredDropdown === 'eyeglasses') && (
                <div
                  className="dropdown-content"
                  onMouseEnter={() => handleDropdownMouseEnter('eyeglasses')}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  <EyeglassDropdown />
                </div>
              )}
            </li>
            <li
              onMouseEnter={() => handleDropdownMouseEnter('sunglasses')}
              onMouseLeave={handleDropdownMouseLeave}
            >
              <a
                href="#sunglasses"
                onClick={() => handleDropdownClick('sunglasses')}
              >
                Sunglasses
              </a>
              {(activeDropdown === 'sunglasses' || hoveredDropdown === 'sunglasses') && (
                <div
                  className="dropdown-content"
                  onMouseEnter={() => handleDropdownMouseEnter('sunglasses')}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  <SunglassesDropdown />
                </div>
              )}
            </li>
            <li
              onMouseEnter={() => handleDropdownMouseEnter('contactlens')}
              onMouseLeave={handleDropdownMouseLeave}
            >
              <a
                href="#contactlens"
                onClick={() => handleDropdownClick('contactlens')}
              >
                Contact Lens
              </a>
              {(activeDropdown === 'contactlens' || hoveredDropdown === 'contactlens') && (
                <div
                  className="dropdown-content"
                  onMouseEnter={() => handleDropdownMouseEnter('contactlens')}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  <ContactLens />
                </div>
              )}
            </li>
            <li
              onMouseEnter={() => handleDropdownMouseEnter('accessories')}
              onMouseLeave={handleDropdownMouseLeave}
            >
              <a
                href="#accessories"
                onClick={() => handleDropdownClick('accessories')}
              >
                Accessories
              </a>
              {(activeDropdown === 'accessories' || hoveredDropdown === 'accessories') && (
                <div
                  className="dropdown-content"
                  onMouseEnter={() => handleDropdownMouseEnter('accessories')}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  <AccessoriesDropdown />
                </div>
              )}
            </li>
            <li
              onMouseEnter={() => handleDropdownMouseEnter('kidglasses')}
              onMouseLeave={handleDropdownMouseLeave}
            >
              <a
                href="#kidglasses"
                onClick={() => handleDropdownClick('kidglasses')}
              >
                Kidglasses
              </a>
              {(activeDropdown === 'kidglasses' || hoveredDropdown === 'kidglasses') && (
                <div
                  className="dropdown-content"
                  onMouseEnter={() => handleDropdownMouseEnter('kidglasses')}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  <KidGlassesDropdown />
                </div>
              )}
            </li>
          </ul>
        </nav>
        <div className="header-right">
          <div className="header-buttons-container">
            <div className="header-buttons">
              {!loggedIn && (
                <button className="header-button" onClick={openLogin}>Sign In</button>
              )}
              <button className="header-button" onClick={handleCartClick}>🛒 Cart</button>
              <button className="header-button" onClick={handleWishlistClick}>❤️ WishList</button>
              <button className="header-button" onClick={handleThreeDClick}>Try-On-3D</button>
              <button className="header-button" onClick={handleProfileClick}>My Profile</button>
            </div>
          </div>
        </div>
      </header>
      <div className="search-bar-service-container">
        <div className="search-bar">
          <SearchBar onSearch={handleSearch} />
        </div>
        <div className="service-location-shape-buttons">
          <button className="service-button" onClick={handleserviceClick}>Service</button>
          <button className="location-button" onClick={handlelocationClick}>Location</button>
          <button className="shape-button" onClick={handleShapeClick}>Shape</button>
          <button className="shape-button" onClick={handleStrainClick}>Strain Test</button>
          <button className="shape-button" onClick={handleTestClick}>Eye Test</button>
        </div>
      </div>
      <main className="main-content">
        <div className="banner">
          <img src={images[currentSlide]} alt="banner" className="banner-image" />
        </div>
        <ShopByCategory openLogin={openLogin} />
        <Offers offers={offers} />
      </main>
      {showSignIn && (
        <SignInForm closeModal={closeSignIn} openLogin={openLogin} onSignUp={handleSignUp} />
      )}
      {showLogin && (
        <LoginForm closeModal={closeLogin} openSignUp={openSignIn} onLogin={handleLogin} />
      )}
      <Footer />
    </div>
  );
};

export default HomePage;
