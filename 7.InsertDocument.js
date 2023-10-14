// Insert Document :
// ● Untuk menyimpan data ke MongoDB, kita perlu membuat document dalam bentuk JSON
// ● Field _id tidak wajib dimasukkan, jika kita tidak memasukkan field _id, maka secara otomatis 
// MongoDB akan membuat _id baru secara random dengan tipe data ObjectId
// ● Atau kita juga bisa secara eksplisit membuat ObjectId baru dengan menggunakan perintah “new 
// ObjectId()”


// Insert Document Function :
// Function :                                               Keterangan :
// - db.<collection>.insertOne(document)                    - Menambah dokumen ke collection
// - db.<collection>.insertMany(array<document>)            - Menambah semua dokumen di array ke 
//                                                            collection