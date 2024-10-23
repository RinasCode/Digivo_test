const express = require('express');
const crypto = require('crypto');
const axios = require('axios');

const router = express.Router();
const webhooks = []; 
const SECRET_KEY = process.env.SECRET_KEY; 

router.post('/register', (req, res) => {
  const { url } = req.body;
  
  webhooks.push(url);
  res.status(201).send({ message: 'Webhook registered successfully' });
});

const sendWebhookNotification = async (url, payload) => {
  const signature = crypto.createHmac('sha256', SECRET_KEY)
                          .update(JSON.stringify(payload))
                          .digest('hex');
  
  try {
    await axios.post(url, payload, {
      headers: {
        'x-signature': signature,
      },
    });
  } catch (error) {
    throw error; 
  }
};

const notifyWebhooks = async (payload) => {
  for (const url of webhooks) {
    for (let i = 0; i < 3; i++) { 
      try {
        await sendWebhookNotification(url, payload);
        break; 
      } catch (error) {
        console.error(`Failed to send to ${url}, attempt ${i + 1}`);
        if (i === 2) {
          console.error(`Failed to send notification after 3 attempts to ${url}`);
        }
        await new Promise(res => setTimeout(res, 300000)); 
      }
    }
  }
};

console.log('Webhook routes loaded');


router.post('/change-status', async (req, res) => {
  console.log('change-status endpoint hit'); 
  const { orderId, newStatus } = req.body;

  const payload = { orderId, newStatus };
  await notifyWebhooks(payload);

  res.status(200).send({ message: 'Order status changed and notification sent.' });
});


module.exports = router;
