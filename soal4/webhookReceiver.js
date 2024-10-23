const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.post('/webhook', (req, res) => {
  const signature = req.headers['x-signature'];
  const payload = req.body;

  console.log('Received webhook notification:', payload);

  res.status(200).send('Notification received');
});

app.listen(PORT, () => {
  console.log(`Listening for webhook notifications on port ${PORT}`);
});
