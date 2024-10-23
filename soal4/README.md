
# Webhook API for Ticket Booking Status Notification

## Deskripsi
Webhook API ini memungkinkan pihak ketiga untuk menerima notifikasi perubahan status pemesanan tiket pesawat. API menyediakan fitur untuk mendaftarkan URL webhook dan mengirim notifikasi ketika status pesanan berubah. Sistem dilengkapi dengan **retry mechanism** dan validasi signature untuk memastikan integritas dan keaslian data.

## Fitur Utama
1. **Registrasi Webhook**  
   Pihak ketiga dapat mendaftarkan URL webhook menggunakan endpoint `/api/webhook/register`.
2. **Notifikasi Perubahan Status**  
   Ketika ada perubahan status pemesanan (contoh: "paid", "cancelled"), sistem mengirim notifikasi ke URL webhook yang terdaftar.
3. **Retry Mechanism**  
   Jika pengiriman notifikasi gagal (status 500 atau 400), sistem mencoba kembali hingga 3 kali dengan interval 5 menit.
4. **Validasi Signature**  
   Setiap notifikasi webhook dilengkapi dengan signature menggunakan algoritma HMAC-SHA256 untuk memastikan integritas dan keaslian data.

## Endpoint

### 1. Registrasi Webhook
- **Endpoint:** `/api/webhook/register`
- **Metode:** POST  
- **Body:**  
  ```json
  {
    "url": "http://localhost:5000/webhook"
  }
  ```
- **Respons:**  
  ```json
  {
    "message": "Webhook registered successfully"
  }
  ```

### 2. Perubahan Status Pesanan
- **Endpoint:** `/api/webhook/change-status`
- **Metode:** POST  
- **Body:**  
  ```json
  {
    "orderId": "123",
    "newStatus": "paid"
  }
  ```
- **Respons:**  
  ```json
  {
    "message": "Order status changed and notification sent."
  }