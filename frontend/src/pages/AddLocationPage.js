import React, { useState } from 'react';
import axios from 'axios';

const AddLocationPage = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('thing_to_do');
  const [coordinates, setCoordinates] = useState({ lat: '', lng: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newLocation = {
      name,
      description,
      type,
      coordinates: { lat: parseFloat(coordinates.lat), lng: parseFloat(coordinates.lng) }
    };
    try {
      await axios.post('http://localhost:5000/api/locations', newLocation);
      alert('Location added successfully!');
      // Clear form or redirect if needed
    } catch (error) {
      console.error('Error adding location:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} required />
      <textarea placeholder="Description" onChange={(e) => setDescription(e.target.value)} required />
      <select onChange={(e) => setType(e.target.value)} value={type}>
        <option value="thing_to_do">Thing to Do</option>
        <option value="hotel">Hotel</option>
        <option value="restaurant">Restaurant</option>
      </select>
      <input type="number" placeholder="Latitude" onChange={(e) => setCoordinates({ ...coordinates, lat: e.target.value })} required />
      <input type="number" placeholder="Longitude" onChange={(e) => setCoordinates({ ...coordinates, lng: e.target.value })} required />
      <button type="submit">Add Location</button>
    </form>
  );
};

export default AddLocationPage;