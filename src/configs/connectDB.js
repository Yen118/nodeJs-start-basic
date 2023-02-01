import mysql from 'mysql2/promise';

console.log('creating connection pool...');
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'nodejsstartbasic'
})

/* const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'nodejsstartbasic'
}); */

// connection.query(
//     'SELECT * FROM `users`',
//     function(err, results, fields) {
//         console.log('check mysql')
//         console.log(results);
//         console.log(fields);
//     }
// )

export default pool;