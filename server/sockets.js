module.exports = function(io) {
    io.on('connection', socket => {
      console.log('A user connected');
  
      socket.on('disconnect', () => {
        console.log('User disconnected');
      });
  
      socket.on('newPost', post => {
        io.emit('updateFeed', post);
      });
    });
  };
  