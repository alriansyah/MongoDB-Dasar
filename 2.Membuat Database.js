// Database :
// ● Database adalah tempat menyimpan collection 
// ● Semua collection harus disimpan di database
// ● Biasanya database digunakan untuk memisahkan data secara logical per aplikasi, artinya biasanya 
// satu aplikasi akan memiliki satu database
// ● Jarang sekali kita akan menggunakan satu database untuk beberapa aplikasi


// Membuat Database :
// ● Kita tidak perlu secara eksplisit membuat database
// ● MongoDB akan secara otomatis membuatkan database sesuai dengan nama database yang kita 
// pilih
// ● Untuk memilih nama database, kita bisa menggunakan perintah “use” diikuti nama database


// Perintah mongosh (mongo shell) :
// - use belajar //memilih database belajar
// - use hello //memilih database hello
// - show databases //menampilkan semua database

// Database akan otomatis dibuat ketika kit mulai membuat collection di dalamnya