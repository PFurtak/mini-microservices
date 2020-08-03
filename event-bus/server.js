const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json({ extended: false }));

app.post('/events', (req, res) => {
  const event = req.body;

  //post service
  axios.post('http://localhost:4000/events', event);

  //coment service
  axios.post('http://localhost:4001/events', event);

  //query service
  axios.post('http://localhost:4002/events', event);

  res.send({ status: 'OK' });
});

app.listen(4005, () => {
  console.log('Event-bus listening on port 4005.');
});
