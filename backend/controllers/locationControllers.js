const Location = require('../models/Location');

// Get all locations
exports.getLocations = async (req, res) => {
    try {
        const locations = await Location.find({});
        res.json(locations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new location
exports.createLocation = async (req, res) => {
    const { name, description, type, coordinates } = req.body;
    const location = new Location({ name, description, type, coordinates });
    try {
        await location.save();
        res.status(201).json(location);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a location
exports.updateLocation = async (req, res) => {
    const { name, description, type, coordinates } = req.body;
    try {
        const location = await Location.findByIdAndUpdate(req.params.id, { name, description, type, coordinates }, { new: true });
        res.json(location);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a location
exports.deleteLocation = async (req, res) => {
    try {
        await Location.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};