-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 22 Okt 2024 pada 15.00
-- Versi server: 10.4.32-MariaDB
-- Versi PHP: 8.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `transaksi_db`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `produk_id` int(11) NOT NULL,
  `nama_produk` varchar(255) NOT NULL,
  `harga` int(11) NOT NULL,
  `kode_unik` decimal(5,2) NOT NULL,
  `status` varchar(50) DEFAULT 'pending',
  `tanggal` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `orders`
--

INSERT INTO `orders` (`id`, `produk_id`, `nama_produk`, `harga`, `kode_unik`, `status`, `tanggal`) VALUES
(1, 1, 'Produk 1', 299000, 1.01, 'pending', '2024-10-22 14:59:29'),
(2, 2, 'Produk 2', 299000, 1.02, 'pending', '2024-10-22 14:59:29'),
(3, 3, 'Produk 3', 299000, 1.03, 'pending', '2024-10-22 14:59:29'),
(4, 4, 'Produk 4', 299000, 1.04, 'pending', '2024-10-22 14:59:29'),
(5, 5, 'Produk 5', 299000, 1.05, 'pending', '2024-10-22 14:59:29'),
(6, 6, 'Produk 6', 299000, 1.06, 'pending', '2024-10-22 14:59:29'),
(7, 7, 'Produk 7', 299000, 1.07, 'pending', '2024-10-22 14:59:29'),
(8, 8, 'Produk 8', 299000, 1.08, 'pending', '2024-10-22 14:59:29'),
(9, 9, 'Produk 9', 299000, 1.09, 'pending', '2024-10-22 14:59:29'),
(10, 10, 'Produk 10', 299000, 1.10, 'pending', '2024-10-22 14:59:29'),
(11, 11, 'Produk 11', 299000, 1.11, 'pending', '2024-10-22 14:59:29'),
(12, 12, 'Produk 12', 299000, 1.12, 'pending', '2024-10-22 14:59:29'),
(13, 13, 'Produk 13', 299000, 1.13, 'pending', '2024-10-22 14:59:29'),
(14, 14, 'Produk 14', 299000, 1.14, 'pending', '2024-10-22 14:59:29'),
(15, 15, 'Produk 15', 299000, 1.15, 'pending', '2024-10-22 14:59:29'),
(16, 16, 'Produk 16', 299000, 1.16, 'pending', '2024-10-22 14:59:29'),
(17, 17, 'Produk 17', 299000, 1.17, 'pending', '2024-10-22 14:59:29'),
(18, 18, 'Produk 18', 299000, 1.18, 'pending', '2024-10-22 14:59:29'),
(19, 19, 'Produk 19', 299000, 1.19, 'pending', '2024-10-22 14:59:29'),
(20, 20, 'Produk 20', 299000, 1.20, 'pending', '2024-10-22 14:59:29'),
(21, 21, 'Produk 21', 299000, 1.21, 'pending', '2024-10-22 14:59:29'),
(22, 22, 'Produk 22', 299000, 1.22, 'pending', '2024-10-22 14:59:29'),
(23, 23, 'Produk 23', 299000, 1.23, 'pending', '2024-10-22 14:59:29'),
(24, 24, 'Produk 24', 299000, 1.24, 'pending', '2024-10-22 14:59:29'),
(25, 25, 'Produk 25', 299000, 1.25, 'pending', '2024-10-22 14:59:29'),
(26, 26, 'Produk 26', 299000, 1.26, 'pending', '2024-10-22 14:59:29'),
(27, 27, 'Produk 27', 299000, 1.27, 'pending', '2024-10-22 14:59:29'),
(28, 28, 'Produk 28', 299000, 1.28, 'pending', '2024-10-22 14:59:29'),
(29, 29, 'Produk 29', 299000, 1.29, 'pending', '2024-10-22 14:59:29'),
(30, 30, 'Produk 30', 299000, 1.30, 'pending', '2024-10-22 14:59:29'),
(31, 31, 'Produk 31', 299000, 1.31, 'pending', '2024-10-22 14:59:29'),
(32, 32, 'Produk 32', 299000, 1.32, 'pending', '2024-10-22 14:59:29'),
(33, 33, 'Produk 33', 299000, 1.33, 'pending', '2024-10-22 14:59:29'),
(34, 34, 'Produk 34', 299000, 1.34, 'pending', '2024-10-22 14:59:29'),
(35, 35, 'Produk 35', 299000, 1.35, 'pending', '2024-10-22 14:59:29'),
(36, 36, 'Produk 36', 299000, 1.36, 'pending', '2024-10-22 14:59:29'),
(37, 37, 'Produk 37', 299000, 1.37, 'pending', '2024-10-22 14:59:29'),
(38, 38, 'Produk 38', 299000, 1.38, 'pending', '2024-10-22 14:59:29'),
(39, 39, 'Produk 39', 299000, 1.39, 'pending', '2024-10-22 14:59:29'),
(40, 40, 'Produk 40', 299000, 1.40, 'pending', '2024-10-22 14:59:29'),
(41, 41, 'Produk 41', 299000, 1.41, 'pending', '2024-10-22 14:59:29'),
(42, 42, 'Produk 42', 299000, 1.42, 'pending', '2024-10-22 14:59:29'),
(43, 43, 'Produk 43', 299000, 1.43, 'pending', '2024-10-22 14:59:29'),
(44, 44, 'Produk 44', 299000, 1.44, 'pending', '2024-10-22 14:59:29'),
(45, 45, 'Produk 45', 299000, 1.45, 'pending', '2024-10-22 14:59:29'),
(46, 46, 'Produk 46', 299000, 1.46, 'pending', '2024-10-22 14:59:29'),
(47, 47, 'Produk 47', 299000, 1.47, 'pending', '2024-10-22 14:59:29'),
(48, 48, 'Produk 48', 299000, 1.48, 'pending', '2024-10-22 14:59:29'),
(49, 49, 'Produk 49', 299000, 1.49, 'pending', '2024-10-22 14:59:29'),
(50, 50, 'Produk 50', 299000, 1.50, 'pending', '2024-10-22 14:59:29');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `kode_unik` (`kode_unik`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
