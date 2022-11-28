const email = document.getElementById('emailCliente');
const nameClientPerfil = document.getElementById('nameClientPerfil');
const fullName = document.getElementById('fullName');
const cpfClient = document.getElementById('cpfCliente');
const telephoneNumberClient = document.getElementById('numeroTelefoneCliente');

nameClientPerfil.textContent = window.localStorage.getItem('fullName');
fullName.value = window.localStorage.getItem('fullName');
cpfClient.value = window.localStorage.getItem('cpfCliente');
email.value = window.localStorage.getItem('email');
telephoneNumberClient.value = window.localStorage.getItem('telephoneNumber');
