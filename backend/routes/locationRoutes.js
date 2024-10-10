const express = require('express');
const {
    getLocations,
    createLocation,
    updateLocation,
    deleteLocation
} = require('../controllers/locationController');

const router = express.Router();

router.route('/')
    .get(getLocations)
    .post(createLocation);

router.route('/:id')
    .put(updateLocation)
    .delete(deleteLocation);

module.exports = router;