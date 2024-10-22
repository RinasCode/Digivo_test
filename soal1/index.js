const express = require('express');
const crypto = require('crypto');
const axios = require('axios');
const sharp = require('sharp');

const app = express();
app.use(express.json());

const HMAC_SECRET = 'your-secret-key';

// Middleware to verify HMAC signature
function verifyHMAC(req, res, next) {
  const receivedHash = req.headers['x-auth-hmac'];
  const computedHash = crypto
    .createHmac('sha512', HMAC_SECRET)
    .update(JSON.stringify(req.body))
    .digest('hex');

  if (receivedHash !== computedHash) {
    return res.status(401).json({ status: 'error', message: 'Invalid HMAC' });
  }
  next();
}

// Endpoint: Convert image to WEBP
app.post('/convert-webp', verifyHMAC, async (req, res) => {
  const { url_gambar, persentase_kompresi } = req.body;

  // Error: URL gambar kosong
  if (!url_gambar) return res.status(400).json({ status: 'error', message: 'Image URL is required' });

  // Error: Persentase kompresi tidak valid
  if (isNaN(persentase_kompresi) || persentase_kompresi < 1 || persentase_kompresi > 100) {
    return res.status(400).json({
      status: 'error',
      message: 'Compression percentage must be a number between 1 and 100'
    });
  }

  try {
    // Coba ambil gambar dari URL
    const response = await axios({ url: url_gambar, responseType: 'arraybuffer' });

    try {
      // Konversi gambar ke WEBP
      const webpBuffer = await sharp(response.data)
        .webp({ quality: persentase_kompresi || 60 })
        .toBuffer();

      const newImageURL = 'https://res.cloudinary.com/dcisb7ayn/image/upload/v1725076891/u5ub4flw4jsqk0efcpf1.jpg'; // Contoh URL

      res.json({
        url_webp: newImageURL,
        ukuran_webp: `${webpBuffer.length} bytes`,
        status: 'success',
        message: 'Image converted to WEBP successfully'
      });
    } catch (error) {
      // Error saat konversi gambar
      return res.status(500).json({ status: 'error', message: 'Image conversion failed' });
    }
  } catch (error) {
    // Error saat mengambil gambar dari URL
    return res.status(404).json({ status: 'error', message: 'Failed to fetch image from URL' });
  }
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
