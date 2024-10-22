const db = require("./db");

const generateKodeUnik = () => {
  const uniqueCodes = [];

  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 99; j++) {
      uniqueCodes.push(`${i}.${String(j).padStart(2, "0")}`);
    }
  }

  return uniqueCodes;
};

const insertTransaksi = async () => {
  const existingCodes = generateKodeUnik();

  for (let i = 0; i < 50; i++) {
    const kodeUnik = existingCodes[i];

    const query = `INSERT INTO orders (produk_id, nama_produk, harga, kode_unik, status) 
                   VALUES (?, ?, ?, ?, ?)`;

    const values = [i + 1, `Produk ${i + 1}`, 299000, kodeUnik, "pending"];

    db.query(query, values, (err, result) => {
      if (err) throw err;
      console.log(
        `Transaksi ${i + 1} berhasil disimpan dengan kode unik ${kodeUnik}.`
      );
    });
  }
};

insertTransaksi();
