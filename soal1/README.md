
# Microservices - Image to WEBP Converter

## Deskripsi
Microservices ini menyediakan REST API untuk mengubah format gambar menjadi format WEBP dengan kompresi yang dapat diatur. API ini menggunakan HMAC SHA-512 untuk autentikasi, memastikan bahwa semua permintaan yang masuk sudah terverifikasi.

## Fitur
- Mengonversi gambar dari URL ke format WEBP dengan kompresi yang dapat diatur.
- Penanganan kondisi error untuk berbagai skenario seperti URL gambar kosong atau kegagalan dalam mengambil gambar.

## Instalasi
1. Buka File di text editor, saya menggunakan Vscode.

2. Install dependensi yang dibutuhkan:
   ```bash
   npm install
   ```

3. Jalankan server:
   ```bash
   node index.js
   ```
   Server akan berjalan pada `http://localhost:3000`.

## Endpoint
### POST `/convert-webp`
Endpoint ini digunakan untuk mengonversi gambar ke format WEBP.

#### **Request Body**
Kirimkan body JSON dengan format berikut:
```json
{
  "url_gambar": "string",          // URL gambar yang ingin dikonversi & gunakan URL gambar yang valid.
  "persentase_kompresi": integer   // Persentase kompresi (0 - 100)
}
```

#### **Headers**
Tambahkan header berikut pada request:
- `x-auth-hmac`: HMAC signature yang dihasilkan berdasarkan body JSON menggunakan kunci rahasia.

#### **Contoh Permintaan**
**Request Body:**
```json
{
  "url_gambar": "https://res.cloudinary.com/dcisb7ayn/image/upload/v1725076891/u5ub4flw4jsqk0efcpf1.jpg",
  "persentase_kompresi": 60
}
```

**Header:**
```
x-auth-hmac: [HMAC signature]
```

#### **Response**
Jika konversi berhasil, respons yang akan diterima adalah:
```json
{
  "url_webp": "https://your-server.com/uploads/image.webp",
  "ukuran_webp": "13720 bytes",
  "status": "success",
  "message": "Image converted to WEBP successfully"
}
```

#### **Contoh Respons Gagal**
1. **URL gambar kosong:**
   **Request Body:**
   ```json
   {
     "url_gambar": "",
     "persentase_kompresi": 60
   }
   ```

   **Response:**
   ```json
   {
     "status": "error",
     "message": "Image URL is required"
   }
   ```

2. **Gagal mengambil gambar dari URL:**
   - Pastikan URL gambar yang valid. Jika URL tidak valid atau gambar tidak dapat diakses, respons akan seperti ini:
   ```json
   {
     "status": "error",
     "message": "Failed to retrieve image from URL"
   }
   ```

3. **Kondisi kompresi tidak valid:**
   **Request Body:**
   ```json
   {
     "url_gambar": "https://example.com/sample.jpg",
     "persentase_kompresi": 160
   }
   ```

   **Response:**
   ```json
   {
     "status": "error",
     "message": "Invalid compression percentage"
   }
   ```

## Catatan
- Pastikan untuk mengganti `your-secret-key` dengan kunci rahasia Anda di kode.
- Gunakan Postman atau alat lain untuk mengirim permintaan ke endpoint ini.
- HMAC signature harus dihasilkan setiap kali body JSON diubah.

