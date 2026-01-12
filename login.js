const loginContainer = document.getElementById("login-container");
const cadastroContainer = document.getElementById("cadastro-container");
const passwordInput = document.getElementById("password-login")
const eyeIcon = document.querySelector(".eye-icon")

function togglePassword() {

  if (passwordInput.type === "password"){
  passwordInput.type = "text"
  eyeIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye-closed-icon lucide-eye-closed"><path d="m15 18-.722-3.25"/><path d="M2 8a10.645 10.645 0 0 0 20 0"/><path d="m20 15-1.726-2.05"/><path d="m4 15 1.726-2.05"/><path d="m9 18 .722-3.25"/></svg>'
    
  } else {
  passwordInput.type = "password"
  eyeIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye-icon lucide-eye"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>'
  }
}

function validarSenha() {

  var senha = document.getElementById('password-cadastro').value;
  var confirmarSenha = document.getElementById('confirm-password').value;

  if (confirmarSenha === senha) {
    alert('Successful');
    location.href = "../TELA DE CATEGORIA/criarCategoria.html";
  } else {
    alert('Error');
  }
}

function validarLogin() {
  location.href = "../TELA DE CATEGORIA/criarCategoria.html"
}

function mostrarCadastro() {

  loginContainer.classList.remove("active");
  cadastroContainer.classList.add("active");
}

function mostrarLogin() {
  cadastroContainer.classList.remove("active");
  loginContainer.classList.add("active");
}