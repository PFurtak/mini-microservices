const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.json({ extended: false }));

app.post('/events', (req, res) => {
  const event = req.body;

  axios.post('http://localhost:4000/events', event);
  axios.post('http://localhost:4001/events', event);
  axios.post('http://localhost:4005/events', event);

  res.send({ status: 'OK' });
});

app.listen(4005, () => {
  console.log('Event-bus listening on port 4005.');
});
