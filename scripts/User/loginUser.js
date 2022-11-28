/* eslint-disable eqeqeq */
const formLogin = document.querySelector('.formulario-entrar');
const emailLogin = document.getElementById('emailLogin');
const descriptionAccessLogin = document.getElementById('descriptionAccess');
const dataDropdown = document.querySelector('[data-dropdown]');
const botaoEntrar = document.querySelector('.button-login');
const profileIconUser = document.querySelector('[data-perfil-dropdown-index]');
const responseLogin = document.querySelector('.responseLoginUser');

function hiddenButtons() {
  if (window.localStorage.getItem('login') == 'true') {
    dataDropdown.style.display = 'none';
    botaoEntrar.style.display = 'none';
    profileIconUser.style.display = 'block';
  }
}

hiddenButtons();

function picUserAndLogin(event) {
  event.preventDefault();
  const xhr = new XMLHttpRequest();
  const urlPic = 'http://127.0.0.1:5000/searchUserForLogin';
  const dataPic = JSON.stringify({
    email: emailLogin.value,
    descriptionAccess: descriptionAccessLogin.value,
  });

  xhr.open('POST', urlPic, true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status) {
      const myArr = JSON.parse(xhr.responseText);
      if (myArr.length !== 0) {
        // eslint-disable-next-line eqeqeq
        if (descriptionAccessLogin.value == myArr.descriptionAccess
          && emailLogin.value.toLowerCase() == myArr.email) {
          if (myArr.isSallon == true) {
            alert('Página de salão');
          } else if (myArr.isSallon == false) {
            if (myArr.cpf == '' || myArr.cpf == undefined) {
              window.localStorage.setItem('id', myArr.id);
              window.localStorage.setItem('email', myArr.email);
              window.localStorage.setItem('descriptionAccess', myArr.descriptionAccess);
              window.localStorage.setItem('fullName', myArr.fullName);
              window.localStorage.setItem('cpfCliente', myArr.cpf);
              window.localStorage.setItem('telephoneNumber', myArr.telephoneNumber);
              window.localStorage.setItem('isSallon', myArr.isSallon);
              window.localStorage.setItem('login', true);
              window.location.href = '../../templates/cliente/perfilCliente.html';
              responseLogin.textContent = '';
            } else {
              window.localStorage.setItem('id', myArr.id);
              window.localStorage.setItem('email', myArr.email);
              window.localStorage.setItem('descriptionAccess', myArr.descriptionAccess);
              window.localStorage.setItem('fullName', myArr.fullName);
              window.localStorage.setItem('cpfCliente', myArr.cpf);
              window.localStorage.setItem('telephoneNumber', myArr.telephoneNumber);
              window.localStorage.setItem('isSallon', myArr.isSallon);
              window.localStorage.setItem('login', true);
              hiddenButtons();
              responseLogin.textContent = '';
            }
          }
        } else {
          responseLogin.textContent = 'Usuário ou senha inválida';
        }
      } else {
        responseLogin.textContent = 'Usuário inexistente';
      }
    }
  };
  xhr.send(dataPic);
}

formLogin.addEventListener('submit', picUserAndLogin);
