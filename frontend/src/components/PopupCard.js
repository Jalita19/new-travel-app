// src/components/PopupCard.js
import React from 'react';
import '../styles/PopupCard.css'; // Import the PopupCard styles

const PopupCard = ({ item, onClose }) => {
    return (
        <div className="popup-card" style={{ left: '50%', top: '50%' }}> {/* Center the popup for now */}
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <p>{item.info}</p>
            <button onClick={onClose}>Close</button>
        </div>
    );
};

export default PopupCard;