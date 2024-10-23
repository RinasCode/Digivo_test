## a. Menentukan Nilai Optimal untuk innodb_buffer_pool_size

Untuk menentukan nilai optimal `innodb_buffer_pool_size`, saya biasanya mempertimbangkan beberapa hal:

- **Total RAM:** Secara umum, disarankan untuk mengatur buffer pool sekitar 70-80% dari total RAM yang ada. Di server ini, mungkin bisa diatur sekitar 40-50GB.

- **Tipe Workload:** Kalau aplikasi lebih banyak baca daripada tulis, buffer pool yang lebih besar jelas akan sangat membantu.

- **Ukuran Database:** Pastikan ukuran buffer pool cukup untuk menyimpan data yang sering diakses, terutama kalau ada tabel besar.

- **Monitoring Performa:** Selalu pantau metrik seperti hit rate buffer pool. Kalau banyak cache misses, itu artinya buffer pool perlu diperbesar.

## b. Pengaruh Ukuran Buffer Pool yang Tidak Sesuai

Kalau ukuran buffer pool tidak sesuai, ada beberapa masalah yang bisa muncul:

- **Penggunaan CPU Tinggi:** CPU bakal kerja lebih keras untuk menangani query yang tidak ada di cache, jadi penggunaan CPU meningkat.

- **Performa Menurun:** Akses disk yang lebih sering untuk ambil data bisa bikin kinerja jadi lambat, apalagi saat beban kerja tinggi.

Jadi, ukuran buffer pool yang tidak pas bisa jadi penghambat utama performa MySQL, meskipun RAM masih ada banyak.
