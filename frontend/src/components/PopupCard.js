// src/components/PopupCard.js
import React from 'react';
import '../styles/PopupCard.css'; // Ensure the path is correct

const PopupCard = ({ item, onClose }) => {
    return (
        <div className="popup-card">
            <button className="close-button" onClick={onClose}>×</button>
            <h3>{item.name}</h3>
            <p>{item.info}</p>
            {item.image && <img src={item.image} alt={item.name} className="popup-image" />}
            <div className="details">{item.details}</div> {/* Display additional details if available */}
        </div>
    );
};

export default PopupCard;
