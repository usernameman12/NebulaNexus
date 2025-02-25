const fs = require('fs');
const path = require('path');

const usersFile = path.join(__dirname, 'data', 'users.json');
const users = JSON.parse(fs.readFileSync(usersFile, 'utf8'));

module.exports = {
  login: (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
      res.json({ success: true, message: 'Login successful', username });
    } else {
      res.status(400).json({ success: false, message: 'Invalid credentials' });
    }
  },

  register: (req, res) => {
    const { username, password } = req.body;
    if (users.find(u => u.username === username)) {
      return res.status(400).json({ success: false, message: 'Username already exists' });
    }

    const newUser = { username, password, bio: '', posts: [] };
    users.push(newUser);
    fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
    res.json({ success: true, message: 'Account created' });
  },

  profile: (req, res) => {
    const username = req.headers.username;
    const user = users.find(u => u.username === username);

    if (user) {
      res.json({ success: true, user });
    } else {
      res.status(404).json({ success: false, message: 'User not found' });
    }
  },

  updateProfile: (req, res) => {
    const { username, bio } = req.body;
    const user = users.find(u => u.username === username);

    if (user) {
      user.bio = bio;
      fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
      res.json({ success: true, message: 'Profile updated' });
    } else {
      res.status(404).json({ success: false, message: 'User not found' });
    }
  },
};
