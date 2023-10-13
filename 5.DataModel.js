// Kenapa Perlu Mengerti Data Modeling :
// ● Pindah dari relational database ke document database bukanlah hal yang sesederhana hanya 
// dengan memindahkan semua table ke collection
// ● Penggunaan document database tidak akan mendatangkan manfaat besar jika kita tidak mengerti 
// cara memodelkan data untuk kebutuhan aplikasi kita
// ● Saat memodelkan data menggunakan relational database, biasanya kita mengacu ke database 
// normalization 
// ● Saat memodelkan data menggunakan document database, kita harus mengacu ke penggunaan 
// aplikasi dalam melakukan query, update dan memproses data



// Schema yang Flexible :   
// ● Tidak seperti di relational database, di MongoDB kita bisa memasukkan data ke collection secara 
// langsung tanpa mendefinisikan schema collection nya.
// ● Schema untuk collection di MongoDB sangat flexible, tiap document bisa berbeda. Tidak seperti 
// table di relational database yang harus sama tiap record.
// ● Namun pada prakteknya, sangat direkomendasikan menggunakan jenis data yang sama untuk tiap 
// collection, walaupun bisa berbeda-beda di collection yang sama



// Primary Key :
// ● Saat membuat dokumen di MongoDB, kita wajib menambahkan primary key / id
// ● Tidak seperti relational database yang bebas membuat column untuk primary key, di MongoDB, 
// primary key wajib menggunakan field _id
// ● Selain itu primary key tidak bisa lebih dari 1 field, hanya bisa field _id, jadi jika kita ingin membuat 
// composite primary key, maka kita hanya bisa melakukan dengan menggunakan 1 field _id



// Embedded vs Reference :

// Gunakan Embedded jika :
// ● Antar document saling ketergantungan
// ● Tidak bisa langsung melakukan perubahan 
// ke embedded document
// ● Embedded document selalu dibutuhkan 
// ketika mengambil data document

// Gunakan Reference jika :
// ● Antar document bisa berdiri sendiri dan 
// tidak terlalu ketergantungan satu sama lain
// ● Bisa melakukan manipulasi data langsung 
// terhadap reference document
// ● Reference document tidak selalu 
// dibutuhkan saat mengambil document