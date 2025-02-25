const fs = require('fs');
const path = require('path');

const threadsFile = path.join(__dirname, 'data', 'threads.json');
let threads = JSON.parse(fs.readFileSync(threadsFile, 'utf8'));

module.exports = {
  getThreads: (req, res) => {
    res.json({ success: true, threads });
  },

  createThread: (req, res) => {
    const { username, content } = req.body;
    const newThread = { id: threads.length + 1, username, content, replies: [] };
    threads.push(newThread);
    fs.writeFileSync(threadsFile, JSON.stringify(threads, null, 2));
    res.json({ success: true, message: 'Thread created' });
  },

  replyToThread: (req, res) => {
    const { username, content } = req.body;
    const threadId = parseInt(req.params.id, 10);
    const thread = threads.find(t => t.id === threadId);

    if (thread) {
      thread.replies.push({ username, content });
      fs.writeFileSync(threadsFile, JSON.stringify(threads, null, 2));
      res.json({ success: true, message: 'Reply added' });
    } else {
      res.status(404).json({ success: false, message: 'Thread not found' });
    }
  },
};
