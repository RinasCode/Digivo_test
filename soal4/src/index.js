const express = require('express');
const bodyParser = require('body-parser');
const webhookRoutes = require('./webhook'); 

const app = express();
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use(bodyParser.json());

app.use('/api/webhook', webhookRoutes); 

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
