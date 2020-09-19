const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json({ extended: false }));

const events = [];

app.post('/events', (req, res) => {
  const event = req.body;

  events.push(event);

  //post service
  axios.post('http://posts-srv:4000/events', event);

  //comment service
  axios.post('http://comments-srv:4001/events', event);

  //query service
  axios.post('http://query-srv:4002/events', event);

  //moderation service
  axios.post('http://moderation-srv:4003/events', event);

  res.send({ status: 'OK' });
});

app.get('/events', (req, res) => {
  res.send(events);
});

app.listen(4005, () => {
  console.log('Event-bus listening on port 4005.');
});
