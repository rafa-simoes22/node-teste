const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'agua'
    });
// node conexao.js

connection.connect( function(err){
    console.log('Conexão OK')
});

connection.query(
    'SELECT * FROM `registros`',
    
);