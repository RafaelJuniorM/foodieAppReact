import sqlite3 from 'sqlite3';

const SQLite = sqlite3.verbose();

function execute(command, params, method = 'all') {
  return new Promise((resolve, reject) => {
    db[method](command, params, (error, result) => {
      if (error) {
        console.error("Error executing command:", error.message);
        return reject(error);
      }
      resolve(result);
    });
  });
}

const db = new SQLite.Database("./src/foodie.api/database/banco.db", SQLite.OPEN_READWRITE, (err) => {
  if (err) 
    return console.error("Error opening database:", err.message);
});

export {db, execute}