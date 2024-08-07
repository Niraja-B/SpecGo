import React, { useState, useEffect } from "react";
import "../styles/Offer.css";

const Offers = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const offers = [
    {
      src: "https://static1.lenskart.com/media/desktop/img/sep22/jj-titanium/Web-Banner.gif",
      alt: "Offer 1"
    },
    {
      src: "https://static5.lenskart.com/media/uploads/WEBlkair_matte_essential.gif",
      alt: "Offer 2"
    },
    {
      src: "https://static1.lenskart.com/media/desktop/img/June24/combo_vc/Desktop.gif",
      alt: "Offer 3"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % offers.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [offers.length]);

  return (
    <div className="offers">
      {offers.map((offer, index) => (
        <img
          key={index}
          src={offer.src}
          alt={offer.alt}
          className={`offer-image ${index === currentSlide ? "active" : ""}`}
          style={{ display: index === currentSlide ? "block" : "none" }}
        />
      ))}
      <div className="dots">
        {offers.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Offers;