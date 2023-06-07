var loginButton = document.getElementById('login-btn');
var usernameInput = document.getElementById('username');
var passwordInput = document.getElementById('password');
var loginError = document.getElementById('login-error');

loginButton.addEventListener('click', function() {
  var username = usernameInput.value;
  var password = passwordInput.value;

  // Vérification du nom d'utilisateur et du mot de passe
  if (username === 'admin' && password === 'password') {
    // Redirection vers la page de contrôle des LED
    window.location.href = 'index.html';
  } else {
    loginError.textContent = 'Nom d\'utilisateur ou mot de passe incorrect';
  }
});
