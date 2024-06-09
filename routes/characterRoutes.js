const express = require('express');
const axios = require('axios');

const router = express.Router();

// Fetch and display Star Wars characters
router.get('/', async (req, res) => {
    try {
        const response = await axios.get('https://swapi.dev/api/people');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Fetch character details by ID
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const response = await axios.get(`https://swapi.dev/api/people/${id}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;