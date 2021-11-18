1. Data siswa 
-Kode
-Nama siswa
-Kelas
-penjemput [1,2,3]

2. Data guru
-kode
-nama guru
-kelas
-no hp guru

3. History
-kode
-id siswa
-nama guru
-nama siswa
-penjemput
-tanggal
-status[open queue done]

Logika
-ketika penjemput datang melakukan scan barcode
-ketika scan barcode cek apakah nomor hp penjemput terdaftar
-jika nomor hp terdaftar maka buat history baru dengan status queue, 
-ketika ada history queue tampilkan nama siswa di halaman guru
-setelah guru mengantar siswa ubah status jadi done