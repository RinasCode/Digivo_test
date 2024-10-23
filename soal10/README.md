# Proyek Social Media Feed

## Deskripsi
Proyek ini merupakan aplikasi sederhana untuk mengelola feed pengguna pada aplikasi social media. Aplikasi ini mengimplementasikan caching menggunakan Redis untuk meningkatkan performa query ketika mengambil data feed.

## Teknologi yang Digunakan
- Node.js
- Express.js
- MySQL
- Redis

## Prerequisites
Sebelum menjalankan aplikasi ini, pastikan Anda telah menginstal:
- Node.js
- MySQL
- Redis (lokal)

## Instalasi Redis
Untuk pengujian lokal, Anda perlu menginstal Redis. Berikut langkah-langkahnya:

### 1. Instalasi Redis
Jika Anda menggunakan sistem operasi Windows, Anda bisa menggunakan [Redis untuk Windows](https://github.com/microsoftarchive/redis/releases). Jika Anda menggunakan Linux atau macOS, Anda bisa menginstal Redis melalui package manager.

#### Untuk Linux:
```bash
sudo apt update
sudo apt install redis-server
```

#### Untuk macOS:
```bash
brew install redis
```

### 2. Menjalankan Redis
Setelah terinstal, jalankan server Redis dengan perintah berikut:
```bash
redis-server
```

### 3. Mengonfigurasi Aplikasi
Edit file `server.js` untuk mengonfigurasi koneksi Redis lokal:
```javascript
const client = redis.createClient({
    url: 'redis://localhost:6379' 
});
```

## Menjalankan Aplikasi
Setelah Redis berjalan, jalankan aplikasi dengan perintah berikut:
```bash
node server.js
```

## Menguji Aplikasi
menguji endpoint `/feed` menggunakan Postman atau browser dengan menyertakan parameter `userId` di query string, misalnya:
```
http://localhost:3000/feed?userId=1
```

