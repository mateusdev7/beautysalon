const form = document.querySelector('.formulario-cadastro-cliente');
const email = document.getElementById('emailCadastroCliente');
const descriptionAccess = document.getElementById('senhaCadastroCliente');
const fullName = document.getElementById('fullName');

function addNewUser(event) {
  event.preventDefault();

  const xhr = new XMLHttpRequest();
  const url = 'http://127.0.0.1:5000/insert';

  xhr.open('POST', url, true);

  xhr.setRequestHeader('Content-Type', 'application/json');

  // eslint-disable-next-line func-names
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const retorno = JSON.parse(this.responseText);
      if (retorno.length !== 0) {
        alert('Conta criada com sucesso!');
      } else {
        alert('Conta já existente');
      }
    }
  };

  const data = JSON.stringify({
    id: 0,
    email: email.value.toLowerCase(),
    descriptionAccess: descriptionAccess.value,
    fullName: fullName.value,
    cpf: '',
    telephoneNumber: '',
    isSallon: false,
  });

  xhr.send(data);
}

if (form) {
  form.addEventListener('submit', addNewUser);
}
