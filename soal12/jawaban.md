## i. Bagaimana innodb_thread_concurrency Bekerja dan Pengaruhnya pada CPU

`innodb_thread_concurrency` membatasi jumlah thread InnoDB yang berjalan secara bersamaan. Ini membantu mengurangi kontensi sumber daya dan beban pada CPU. Jika terlalu banyak thread berjalan bersamaan, CPU bisa mengalami lonjakan penggunaan karena kontensi.

- **Terlalu rendah**: CPU kurang optimal, throughput lambat.
- **Terlalu tinggi**: Kontensi CPU meningkat, kinerja menurun.

## ii. Strategi Lain Mengatasi CPU Spike di InnoDB

- **Optimasi Query**: Pastikan query menggunakan indeks yang benar agar lebih efisien.
- **Atur Buffer Pool**: Tingkatkan `innodb_buffer_pool_size` agar lebih banyak data di-cache di memori.
- **Atur Log Flush**: Mengurangi frekuensi log flush (`innodb_flush_log_at_trx_commit`) bisa mengurangi beban I/O dan CPU.
- **Gunakan Thread Pool**: Batasi jumlah thread aktif menggunakan thread pooling.
- **Sharding atau Scale-Out**: Bagi beban kerja ke beberapa server untuk mengurangi tekanan pada satu server.
- **Upgrade Hardware**: Jika terus menjadi bottleneck, pertimbangkan untuk upgrade CPU atau menambah core.
