// Exports a function that rebuilds the database from scratch. 
// This is useful to run before each test so you are always starting each test with fresh consistent data.


const db = require("./connection");
const path = require("path");
const fs = require("fs"); // module reads the contents of our SQL file

const initPath = path.join(__dirname, "init.sql");
const initSql = fs.readFileSync(initPath, "utf-8");

function build() {
    return db.query(initSql);
}

// Allows build to be ran on the command line, npm run setupdb will now run build()
if (require.main === module) build();

// Testing imports build but chooses when to run it
module.exports = build;