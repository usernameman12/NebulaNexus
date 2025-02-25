const fs = require('fs');
const path = require('path');

const usersFile = path.join(__dirname, 'data', 'users.json');
const threadsFile = path.join(__dirname, 'data', 'threads.json');

// Create files if they don't exist
if (!fs.existsSync(usersFile)) {
  fs.writeFileSync(usersFile, JSON.stringify([], null, 2));
}

if (!fs.existsSync(threadsFile)) {
  fs.writeFileSync(threadsFile, JSON.stringify([], null, 2));
}
