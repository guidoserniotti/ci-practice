const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log('Received a request.');
    const msg = 'Works on my machine.';
    res.send(msg);
});

module.exports = app;
