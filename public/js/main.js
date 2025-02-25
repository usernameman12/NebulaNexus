// Check if user is logged in, if not, redirect to login page
if (!localStorage.getItem('user') && window.location.pathname !== '/login.html' && window.location.pathname !== '/register.html') {
    window.location.href = '/login.html';
  }
  
  // Simulating posts for the homepage
  const posts = [
    { username: 'user1', content: 'Hello Nebula Nexus!' },
    { username: 'user2', content: 'This is a test post.' },
  ];
  
  const postFeed = document.getElementById('postFeed');
  posts.forEach(post => {
    const postDiv = document.createElement('div');
    postDiv.className = 'post';
    postDiv.innerHTML = `<strong>${post.username}</strong>: ${post.content}`;
    postFeed.appendChild(postDiv);
  });
  