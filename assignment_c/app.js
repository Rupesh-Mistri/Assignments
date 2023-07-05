const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'assigmentc',
});

function get_orders_of_last_7_days(callback) {
    const query = "SELECT * FROM orders WHERE createdAt >= CURDATE() - INTERVAL 7 DAY;";

    connection.query(query, (error, results) => {
        if (error) {
            console.error('Error retrieving users:', error);
            return callback(error, null);
        }

        return callback(null, results);
    });
}


const companyId = 1;
get_orders_of_last_7_days((error, orders) => {
    if (error) {
        console.error('Error:', error);
        return;
    }

    console.log('orders:', orders);
});

connection.end();
