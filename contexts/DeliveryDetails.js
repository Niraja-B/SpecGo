// src/components/DeliveryDetails.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/DeliveryDetails.css';

const DeliveryDetails = () => {
  const navigate = useNavigate();
  const [address, setAddress] = useState({
    name: '',
    phone: '',
    area: '',
    city: '',
    country: '',
    pincode: '',
  });

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const handleSave = () => {
    if (Object.values(address).some(value => value.trim() !== '')) {
      // Save address and navigate to BuyNow page
      console.log('Saved address:', address);
      navigate('/buynow', { state: { address } });
    } else {
      alert('Please fill in at least one field before saving.');
    }
  };

  const handleClose = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <h3>Delivery Address</h3>
        <div className="input-group">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={address.name}
            onChange={handleAddressChange}
            className="address-input"
          />
        </div>
        <div className="input-group">
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={address.phone}
            onChange={handleAddressChange}
            className="address-input"
          />
        </div>
        <div className="input-group">
          <input
            type="text"
            name="area"
            placeholder="Area"
            value={address.area}
            onChange={handleAddressChange}
            className="address-input"
          />
        </div>
        <div className="input-group">
          <input
            type="text"
            name="city"
            placeholder="City"
            value={address.city}
            onChange={handleAddressChange}
            className="address-input"
          />
        </div>
        <div className="input-group">
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={address.country}
            onChange={handleAddressChange}
            className="address-input"
          />
        </div>
        <div className="input-group">
          <input
            type="text"
            name="pincode"
            placeholder="Pincode"
            value={address.pincode}
            onChange={handleAddressChange}
            className="address-input"
          />
        </div>
        <div className="button-group">
          <button className="save-button" onClick={handleSave}>
            Save Details
          </button>
          <button className="close-button" onClick={handleClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeliveryDetails;
