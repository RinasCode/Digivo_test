## 1. Mengidentifikasi Query yang Menyebabkan Penggunaan CPU Tinggi

### a. Menggunakan `SHOW PROCESSLIST`:
Jalankan perintah berikut di MySQL:
```
SHOW PROCESSLIST;
```
akan menampilkan semua koneksi aktif dan query yang sedang berjalan. Cek kolom `Command` dan `Time` untuk mengidentifikasi query yang berjalan lama yang bisa jadi penyebab penggunaan CPU tinggi.

### b. Mengaktifkan Slow Query Log:
Aktifkan Slow Query Log untuk merekam query yang memerlukan waktu lebih dari batas waktu yang ditentukan (misalnya, lebih dari 1 detik). DEengan cara mengedit file konfigurasi MySQL (`my.cnf` atau `my.ini`):

```ini
slow_query_log = 1
long_query_time = 1
```

Setelah diaktifkan, periksa file log untuk menemukan query yang berkinerja buruk.

### c. Menggunakan Performance Schema:
Dengan mengaktifkan Performance Schema, dapat melakukan analisis lebih mendalam. Gunakan tabel `events_statements_summary_by_digest` untuk mendapatkan ringkasan dari query yang dieksekusi dan mengidentifikasi yang menggunakan CPU tinggi.

## 2. Menyajikan Laporan Performa Query Menggunakan Tools Monitoring MySQL

### a. Menggunakan `EXPLAIN`:
Setelah mengidentifikasi query yang bermasalah, gunakan perintah `EXPLAIN` untuk menganalisis rencana eksekusi query:

```sql
EXPLAIN SELECT * FROM nama_table WHERE condition;
```

Hasil dari `EXPLAIN` akan memberikan informasi tentang bagaimana MySQL merencanakan untuk mengeksekusi query, termasuk tipe tabel, penggunaan indeks, dan estimasi jumlah baris yang perlu diproses.

### b. Menggunakan `SHOW PROFILE`:
aktifkan profiling, untuk mendapatkan informasi detail tentang eksekusi query tertentu:

```sql
SHOW PROFILE FOR QUERY query_id;
```

Untuk mengaktifkan profiling, jalankan:
```sql
SET profiling = 1;
```

dengan ini terdapat informasi di mana sebagian besar waktu eksekusi query dihabiskan, seperti saat pengambilan data, pemrosesan, atau pengembalian hasil.

## 3. Solusi Optimasi Query

### a. Menambah Indeks:
Periksa apakah kolom yang sering digunakan dalam klausa `WHERE`, `JOIN`, atau `ORDER BY` telah diindeks. untuk mempercepat eksekusi query secara signifikan.

### b. Menghindari Query yang Tidak Efisien:
Hindari penggunaan subquery yang kompleks atau fungsi yang mempengaruhi performa, seperti `LIKE` yang tidak diindeks. Sebaiknya gunakan `JOIN` jika memungkinkan.

### c. Optimasi Struktur Tabel:
Evaluasi apakah struktur tabel dapat dioptimalkan, seperti normalisasi untuk mengurangi redundansi data atau denormalisasi untuk meningkatkan performa baca.

### d. Menggunakan Query Caching:
Jika query sering dipanggil dengan data yang sama, sebaiknya mengaktifkan query caching.

### e. Refactor Query:
Lakukan analisis mendalam untuk melihat apakah query dapat di-refactor agar lebih sederhana atau lebih efisien. Mengurangi jumlah data yang diambil atau diproses dapat secara signifikan mengurangi penggunaan CPU.

## 4. Monitoring dan Penyesuaian Berkelanjutan:
Monitor performa server MySQL secara berkala dan sesuaikan strategi optimasi sesuai dengan perubahan beban kerja dan pertumbuhan data.

