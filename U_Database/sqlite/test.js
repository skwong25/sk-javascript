const sqlite3 = require('sqlite3').verbose();
// execution mode set to verbose to produce long stack traces

// sqlite3.Database() returns a Database object and opens the database connection automatically
let db = new sqlite3.Database('./db/chinook.db', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to chinook database');
    }
);

/*
let sql = 'SELECT * FROM hits WHERE id = 1';


db.all(sql, [], (err, rows) => {
    if (err) {
        throw err;
    }
    rows.forEach((row) => {
    console.log(row.name);   // Moon
    console.log(row);       // { id: 1, name: 'Moon', year: 1990, rating: 5.5 }
    })
})
*/

/*
let sql = 'SELECT * \
           FROM taytay \
           WHERE name = ?;'         // Note this is how you pass in argument

db.get(sql, ['Moon'], (err, row) => {
    if (err) {
        return console.error(err.message);
    }
    return row ?
        console.log(`Track: ${row.track} Name: ${row.name}`)
        : console.log('No records found with this search parameter');
});  
*/

let sql = 'SELECT AVG(rating) AS "average", location \
            FROM taytay \
            GROUP BY location;' 

db.serialize(function () {
    db.run('INSERT INTO taytay (track, name, location) VALUES (12, "Shiva", "Petersborough")');
    db.each(sql, [], (err, row) => {
        if (err) {
            return console.error(err.message);
        }
        console.log(`The average rating in ${row.location} is ${row.average}`)
    });
});


db.close((err) => {
    if (err) {
        return console.err(err.message);
    }
    console.log('Close the database connection');
});

// Both the .Database() and .close() functions accepts a callback function called when the database opens successfully
// or when error occurred    