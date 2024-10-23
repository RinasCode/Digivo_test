## a. Kapan Query Cache Bisa Meningkatkan Penggunaan CPU?

Query cache bisa bikin CPU naik kalau server sering update atau insert data, karena setiap kali ada perubahan di tabel, query cache harus dihapus atau di-update. Jadi, bukannya membantu, malah bikin kerjaan tambahan buat CPU. Selain itu, query cache juga pakai global lock, jadi kalau satu thread lagi pakai cache, yang lain harus nunggu. Ini bisa bikin bottleneck di CPU, terutama kalau banyak query yang dijalankan bersamaan.

## b. Aktifkan atau Nonaktifkan Query Cache?

Di MySQL versi terbaru (8.0+), query cache sudah dihapus, karena tidak efektif buat workload modern yang sering ada perubahan data. Jadi kalau pakai versi terbaru, tidak perlu memikirkan query cache lagi. Tapi kalau masih pakai versi lama dan banyak operasi write, lebih baik dinonaktifkan aja query cache (`query_cache_type=OFF`). Kalau servernya lebih banyak query baca dan jarang update, query cache bisa membantu, tapi tetap harus hati-hati supaya tidak membebani CPU.

