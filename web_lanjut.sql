-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 15, 2023 at 06:46 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `web_lanjut`
--

-- --------------------------------------------------------

--
-- Table structure for table `bukus`
--

CREATE TABLE `bukus` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `kode_buku` int(11) NOT NULL,
  `judul` varchar(255) NOT NULL,
  `tahun_terbit` int(11) NOT NULL,
  `jumlah` int(11) NOT NULL,
  `pengarang_id` bigint(20) UNSIGNED NOT NULL,
  `penerbitan_id` bigint(20) UNSIGNED NOT NULL,
  `rak_kode_rak` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `bukus`
--

INSERT INTO `bukus` (`id`, `kode_buku`, `judul`, `tahun_terbit`, `jumlah`, `pengarang_id`, `penerbitan_id`, `rak_kode_rak`, `created_at`, `updated_at`) VALUES
(1, 101, 'Mengejar Mimpi', 2001, 2, 201, 0, 18, '2023-11-13 05:00:21', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `mahasiswas`
--

CREATE TABLE `mahasiswas` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nim` int(11) NOT NULL,
  `nama` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `tempat_lahir` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `tgl_lahir` date NOT NULL,
  `prodi_id` bigint(20) UNSIGNED NOT NULL,
  `th_masuk` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `mahasiswas`
--

INSERT INTO `mahasiswas` (`id`, `nim`, `nama`, `tempat_lahir`, `tgl_lahir`, `prodi_id`, `th_masuk`, `created_at`, `updated_at`) VALUES
(112, 10122009, 'Indah Purnama Dewi', 'Blitar', '2000-06-12', 2, 2021, '2023-11-17 03:00:21', NULL),
(113, 10122018, 'Sadiyah', 'Blitar', '2004-03-31', 2, 2021, '2023-11-18 03:00:22', '2023-11-18 03:00:22'),
(115, 10122014, 'Hendri', 'Blitar', '0000-00-00', 3, 2020, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(116, 10122019, 'Say', 'Blitar', '2004-03-26', 1, 2021, NULL, NULL),
(117, 1012201, 'Aiya', 'Surabaya', '2012-12-12', 1, 2020, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `prodis`
--

CREATE TABLE `prodis` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `kode_prodi` int(11) NOT NULL,
  `nama_prodi` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `singkatan` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `prodis`
--

INSERT INTO `prodis` (`id`, `kode_prodi`, `nama_prodi`, `singkatan`, `created_at`, `updated_at`) VALUES
(1, 1, 'Administrasi Server dan Jaringan Komputer', 'ASJK', '2023-11-17 03:00:21', NULL),
(2, 2, 'Operasional Perkantoran Digital', 'OPD', '2023-12-11 03:03:52', '2023-12-11 03:03:52'),
(3, 3, 'Pengolahan Hasil Ternak Unggas', 'PHTU', '2023-12-11 03:05:45', '2023-12-11 03:05:45'),
(4, 4, 'Penyuntingan Audio dan Video', 'PAV', '2023-12-11 03:05:45', '2023-12-11 03:05:45');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bukus`
--
ALTER TABLE `bukus`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mahasiswas`
--
ALTER TABLE `mahasiswas`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `prodis`
--
ALTER TABLE `prodis`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bukus`
--
ALTER TABLE `bukus`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `mahasiswas`
--
ALTER TABLE `mahasiswas`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=118;

--
-- AUTO_INCREMENT for table `prodis`
--
ALTER TABLE `prodis`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
