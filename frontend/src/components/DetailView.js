// src/components/DetailView.js
import React from 'react';
import './styles/DetailView.css';

const DetailView = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div className="detail-view">
      <button onClick={onClose}>Close</button>
      <h2>{item.name}</h2>
      <p>{item.info}</p>
      <p>{item.details}</p>
    </div>
  );
};

export default DetailView;