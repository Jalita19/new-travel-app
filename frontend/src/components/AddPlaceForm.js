import React, { useState } from 'react';

const AddPlaceForm = ({ setUserPlaces }) => {
  const [name, setName] = useState('');
  const [type, setType] = useState('restaurants'); // Default to restaurants

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;

    setUserPlaces((prev) => ({
      ...prev,
      [type]: [...prev[type], { name }],
    }));

    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Enter place name" 
        required 
      />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="restaurants">Restaurant</option>
        <option value="hotels">Hotel</option>
        <option value="attractions">Attraction</option>
      </select>
      <button type="submit">Add Place</button>
    </form>
  );
};

export default AddPlaceForm;
