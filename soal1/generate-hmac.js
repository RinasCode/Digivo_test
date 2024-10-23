const crypto = require('crypto');

const body = JSON.stringify({
  url_gambar: "https://res.cloudinary.com/dcisb7ayn/image/upload/v1725076891/u5ub4flw4jsqk0efcpf1.jpg",
  persentase_kompresi: 60
});

const HMAC_SECRET = 'your-secret-key'; 
const hash = crypto.createHmac('sha512', HMAC_SECRET).update(body).digest('hex');

console.log(`HMAC Hash: ${hash}`); 
