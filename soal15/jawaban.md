## a. Menganalisa Deadlock Menggunakan Log MySQL dan SHOW ENGINE INNODB STATUS

Untuk menganalisa deadlock, saya biasanya mulai dengan melihat log MySQL. Jika deadlock terjadi, MySQL akan mencatatnya dalam log, yang bisa diakses menggunakan perintah `SHOW ENGINE INNODB STATUS`.

Setelah menjalankan perintah ini, saya mencari bagian yang berisi informasi tentang deadlock. Di situ biasanya ada rincian tentang transaksi yang terlibat, lock yang dipegang, dan lock yang diminta.

Dari informasi itu, saya bisa mengidentifikasi transaksi mana yang saling menunggu dan resource apa yang sedang dikunci. Ini membantu saya memahami penyebab deadlock dan bagian mana dari aplikasi yang perlu diperbaiki.

## b. Strategi Optimasi Locking untuk Menghindari Deadlock

Untuk menghindari deadlock dan mengurangi dampak penggunaan CPU akibat lock contention, saya bisa menerapkan beberapa strategi optimasi:

- **Pengurangan Durasi Lock:** Pastikan transaksi melakukan pekerjaan yang diperlukan secepat mungkin, jadi lock tidak dipegang lebih lama dari yang diperlukan.

- **Urutan Akses yang Konsisten:** Cobalah untuk mengakses tabel atau baris dalam urutan yang sama di semua transaksi. Ini membantu menghindari situasi di mana satu transaksi mengunci resource A dan yang lain mengunci resource B, lalu saling menunggu.

- **Penggunaan Lock Timeout:** Mengatur timeout pada transaksi agar jika transaksi tidak mendapatkan lock dalam waktu tertentu, transaksi akan dibatalkan dan bisa dicoba lagi. Ini mencegah transaksi menggantung terlalu lama.

- **Pembagian Transaksi:** Jika memungkinkan, bagi transaksi besar menjadi transaksi yang lebih kecil. Ini mengurangi jumlah lock yang dipegang pada satu waktu dan bisa mengurangi kemungkinan deadlock.

Dengan menerapkan strategi-strategi ini, saya berharap bisa mengurangi risiko deadlock dan dampak pada penggunaan CPU saat transaksi besar berlangsung.
