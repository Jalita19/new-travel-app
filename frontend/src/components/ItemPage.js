// src/components/ItemPage.js
import React from 'react';
import './styles/ItemPage.css';

const ItemPage = ({ items, title, onItemClick }) => {
  return (
    <div className="item-page">
      <h1>{title}</h1>
      {Object.entries(items).map(([state, items]) => (
        <div key={state}>
          <h2>{state}</h2>
          {items.map(item => (
            <div key={item.id} className="card" onClick={() => onItemClick(item)}>
              <div className="card-title">{item.name}</div>
              <div className="card-info">{item.info}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ItemPage;