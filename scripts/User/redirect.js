const botaoContaCliente = document.querySelector('[data-botao-conta-cliente]');
const botaoSairCliente = document.querySelector('[data-botao-sair-cliente]');
const dataDropdownCliente = document.querySelector('[data-dropdown]');
const botaoEntrarCliente = document.querySelector('.button-login');
const profileIconUserCliente = document.querySelector('[data-perfil-dropdown-index]');

function hiddenLogin() {
  dataDropdownCliente.style.display = 'block';
  botaoEntrarCliente.style.display = 'block';
  profileIconUserCliente.style.display = 'none';
}

botaoContaCliente.addEventListener('click', () => {
  window.location.href = '../../templates/cliente/perfilCliente.html';
});

function exitAccount() {
  window.localStorage.setItem('login', 'false');
  window.localStorage.setItem('descriptionAccess', '');
  window.localStorage.setItem('cpfCliente', '');
  window.localStorage.setItem('fullName', '');
  window.localStorage.setItem('id', '');
  window.localStorage.setItem('email', '');
  window.localStorage.setItem('telephoneNumber', '');
  window.localStorage.setItem('isSallon', false);
  hiddenLogin();
}

botaoSairCliente.addEventListener('click', exitAccount);
