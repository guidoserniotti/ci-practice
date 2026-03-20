const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log('Received a request to the root route');
    const msg = 'Hello World!';
    res.send(msg);
});

module.exports = app;
