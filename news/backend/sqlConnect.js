const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    database: 'full_stack_w100322er_2',
    user: 'root',
    password: '',
});

con.connect((err) => {
    if (err) {
        throw err;
    }

    console.log("آيوا أليك");
});

module.exports = con;