// Install required packages using: npm install express body-parser

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// In-memory data structure to store votes
let votes = {
    English: 0,
    Math: 0,
    Urdu: 0,
    Science: 0,
    Computer: 0,
    Arabic: 0,
    SST: 0
};

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Vote endpoint
app.post('/vote', (req, res) => {
    const { teacher } = req.body;

    if (!votes.hasOwnProperty(teacher)) {
        return res.status(400).json({ error: 'Invalid teacher' });
    }

    votes[teacher]++;
    res.status(200).json({ message: 'Vote recorded successfully' });
});

// Results endpoint
app.get('/results', (req, res) => {
    res.status(200).json(votes);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
