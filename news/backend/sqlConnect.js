import mysql from 'mysql';

export const con = mysql.createConnection({
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