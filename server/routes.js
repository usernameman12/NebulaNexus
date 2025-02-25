const express = require('express');
const fs = require('fs');
const path = require('path');
const auth = require('./auth');
const threads = require('./threads');

module.exports = function(io) {
  const router = express.Router();

  router.post('/login', auth.login);
  router.post('/register', auth.register);
  router.get('/profile', auth.profile);
  router.post('/profile/update', auth.updateProfile);

  router.get('/', threads.getThreads);
  router.post('/threads', threads.createThread);
  router.post('/threads/:id/reply', threads.replyToThread);

  return router;
};