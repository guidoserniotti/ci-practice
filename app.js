const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log('THIS IS GOING TO FAIL THE PR :)');
    const msg = 'Works on my machine.';
    res.send(msg);
});

module.exports = app;
