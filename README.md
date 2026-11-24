# CV Access Request Demo

Demo statis formulir permintaan CV, terinspirasi oleh alur pada halaman CV Ijal Fauzi. Demo meminta nama, email, nomor WhatsApp, perusahaan, jabatan, alasan meminta CV, dan persetujuan privasi. LinkedIn dan pesan bersifat opsional.

## Menjalankan secara lokal

Buka index.html di browser, atau jalankan server statis dari folder ini:

    python3 -m http.server 8000

Lalu buka http://localhost:8000.

## Batasan demo

- Form memakai validasi bawaan browser.
- Tidak ada data yang dikirim ke server, disimpan di browser, atau dicatat.
- Setelah form valid, halaman menampilkan profil CV contoh dengan data fiktif.
- Ini hanya prototipe front-end. Pengunjung dapat melewati pemeriksaan front-end dengan melihat source code. Jangan meletakkan CV asli di repo publik atau mengandalkan form ini untuk melindungi file.

## Untuk versi produksi

Simpan CV di penyimpanan privat. Kirim isian ke backend melalui HTTPS, validasi di server, tambahkan perlindungan spam dan pembatasan permintaan, catat persetujuan secara aman, lalu kirim tautan unduhan bertanda tangan yang kedaluwarsa. Jelaskan tujuan pemrosesan, penerima data, masa penyimpanan, dan cara meminta penghapusan sebelum mengumpulkan data pribadi.
