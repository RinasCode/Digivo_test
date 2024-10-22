const db = require('./db');  // Koneksi ke MySQL

// Fungsi untuk generate semua kode unik dari 1.01 hingga 10.99
const generateKodeUnik = () => {
  const uniqueCodes = [];

  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 99; j++) {
      uniqueCodes.push(`${i}.${String(j).padStart(2, '0')}`); 
    }
  }

  return uniqueCodes; // menghasilkan Kode unik dari 1.01 hingga 10.99
};

// Fungsi untuk insert 50 transaksi ke dalam database
const insertTransaksi = async () => {
  const existingCodes = generateKodeUnik(); // Dapatkan kode unik

  // Set 50 transaksi  
  for (let i = 0; i < 50; i++) {
    const kodeUnik = existingCodes[i]; // Ambil kode unik secara berurutan

    const query = `INSERT INTO orders (produk_id, nama_produk, harga, kode_unik, status) 
                   VALUES (?, ?, ?, ?, ?)`;

    const values = [i + 1, `Produk ${i + 1}`, 299000, kodeUnik, 'pending'];

    // Eksekusi query insert
    db.query(query, values, (err, result) => {
      if (err) throw err;
      console.log(`Transaksi ${i + 1} berhasil disimpan dengan kode unik ${kodeUnik}.`);
    });
  }
};

// Panggil function insertTransaksi
insertTransaksi();
