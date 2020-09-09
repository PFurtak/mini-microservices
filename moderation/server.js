const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json({ extended: false }));

app.post('/events', (req, res) => {});

app.listen(4003, () => {
  console.log('Moderation service listening on port 4003.');
});
