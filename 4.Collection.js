// Collection :
// ● Collection adalah tempat menyimpan document
// ● Maximum per document yang bisa disimpan adalah 16MB
// ● Maximum level nested document yang bisa disimpan adalah 100 level


// Database Methods untuk Collection :
// - Database Methods untuk Collection:               Keterangan :
// - db.getCollectionNames()                          - Mengambil semua nama collection
// - db.createCollection("name")                      - Membuat collection baru
// - db.getCollection("name")                         - Mendapatkan object collection
// - db.<name>                                        - Sama dengan db.getCollection(<name>)
// - db.getCollectionInfos()                          - Mendapat informasi semua collection


// Collection Methods :
// Database Methods untuk Collection :                  Keterangan :
// - db.<collection>.find()                             - Mengambil semua document 
// - db.<collection>.count()                            - Mengambil jumlah document
// - db.<collection>.drop()                             - Menghapus collection
// - db.<collection>.totalSize()                        - Mengambil total ukuran collection
// - db.<collection>.stats()                            - Mengambil informasi statistik collection


// 