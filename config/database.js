// WHY DO WE NEED A DATABASE?
// A database is for persistance, or the ability to store information over the long haul that exists even after its parent process/object ceases to exist or is turned off. Unlike localStorage or data that is saved to the local client, this type of data cannot be shared between clients and doesn't persist after the client disconnects.

// INTERACTING WITH A DATABASE
/*
2 Common Approaches:
1 - Using the db's native query language (sql, etc)
     1a - Provides the best performance.
2 - Using an "Object Data Model" (ODM) or "Object Relational Model" (ORM). An ODM/ORM represents the site's data as JavaScript objects, which are then mapped to the underlying db.
     2a - Often slower but allows for devs to continue to think in JavaScript objects rather than db semantics
     2b - Provides place to perform data validation
*/

// CONNECTING TO THE DB
// Create a Sequelize Instance
const Sequelize = require('sequelize');
// Passing the connection parameters separately (using env vars) to the Sequelize constructor and exporting for use in app.js
module.exports = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: 'localhost',
    dialect: 'postgres'
  });

/*
// Passing Database Configuration Options Out
var dbconfig = {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: 'localhost',
    dialect: 'postgres'
};

module.exports = dbconfig; // See DB CONNECTION section of app.js
*/

