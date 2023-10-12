// MongoDB :
// - Merupakan database management system yang berbasis document
// - MongoDB hampir mendukung semua bahasa pemrogramman sebagai client nya
// - MongoDB tidak menggunakan SQL, namun menggunakan javascript sebagai bahasa utama untuk manipulsi document


// Apa itu Document Oriented Database ?
// - Document Oriented Database (DOD) adalah sistem database yang digunakan untuk memaniplasi
//   data dalam betuk document (semi structured data)
// - Biasanya document disimpan dalam bentuk JSON atau XML
// - DOD biasanya bertolak belakang dengan relational database (RDBMS)
// - Relational Database  biasanya menyimpan data dalam betuk table dan menyimpan relasinya di table lain
// - Document Oriented Database biasanya menyimpan data dalam bentuk JSON atam XML, dan menyimpan
//   relasinya sebagai embedded object di dalam document yang sama


// Istilah Relational DB vs Document DB :

// Relational DB :              // Document DB :
// - Database                   // - Database
// - Table                      // - Collection (kumpulan document)
// - Column                     // - Field (atribute)
// - Row, Record                // - Document (JSON, XML, etc.)
// - Join Table                 // - Embedded Document, Reference
// - SQL                        // - Javascript (MongoDB)

// Run mongo di windows cmd :
// lakukan di direktori bin : mongod --dbpath C:\MongoDB\bin\data


// Run mongosh (mongo shell) di windows cmd :
// lakukan di direktori bin : mongosh mongodb://localhost:27017