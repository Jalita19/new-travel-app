const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    type: { type: String, enum: ['thing_to_do', 'hotel', 'restaurant'], required: true },
    coordinates: {
        lat: { type: Number, required: true },
        lng: { type: Number, required: true },
    },
}, {
    timestamps: true,
});

const Location = mongoose.model('Location', locationSchema);
module.exports = Location;