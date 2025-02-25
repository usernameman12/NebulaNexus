document.getElementById('loginForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Simulate a successful login
    if (username === 'user' && password === 'password') {
      localStorage.setItem('user', username);
      window.location.href = '/';
    } else {
      alert('Invalid credentials!');
    }
  });
  
  document.getElementById('registerForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('newUsername').value;
    const password = document.getElementById('newPassword').value;
  
    // Simulate successful registration
    alert('Account created! You can now log in.');
    window.location.href = '/login.html';
  });
  
  document.getElementById('logoutButton')?.addEventListener('click', function () {
    localStorage.removeItem('user');
    window.location.href = '/login.html';
  });
  