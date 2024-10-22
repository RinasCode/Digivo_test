const mysql = require('mysql2');

// Koneksi ke MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', 
  database: 'transaksi_db'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Terhubung ke database MySQL');
});

module.exports = db;
