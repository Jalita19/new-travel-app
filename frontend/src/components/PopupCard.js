import React from 'react';

const PopupCard = ({ item, onClose }) => {
  // Check if item is defined before accessing its properties
  if (!item) return null; // Return nothing if item is undefined

  return (
    <div className="popup-card">
      <h2>{item.name}</h2>
      <p>{item.info}</p>
      {item.image && <img src={item.image} alt={item.name} />} {/* Conditional rendering for image */}
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default PopupCard;
