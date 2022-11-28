const formularioDadosCliente = document.querySelector('.formulario-dados-cliente');
const emailClient = document.getElementById('emailCliente');
const cpf = document.getElementById('cpfCliente');
const telephoneNumber = document.getElementById('numeroTelefoneCliente');

function updateUser(e) {
  e.preventDefault();
  const urlUpdate = 'http://127.0.0.1:5000/update';
  const xhrUpdate = new XMLHttpRequest();
  const data = JSON.stringify({
    id: window.localStorage.getItem('id'),
    email: emailClient.value,
    descriptionAccess: window.localStorage.getItem('descriptionAccess'),
    fullName: window.localStorage.getItem('fullName'),
    cpf: cpf.value,
    telephoneNumber: telephoneNumber.value,
    isSallon: window.localStorage.getItem('isSallon'),
  });
  console.log(data);

  xhrUpdate.open('POST', urlUpdate, true);
  xhrUpdate.setRequestHeader('Content-Type', 'application/json');
  // eslint-disable-next-line func-names
  xhrUpdate.onreadystatechange = function () {
    if (xhrUpdate.readyState === 4 && xhrUpdate.status === 200) {
      const myArr = JSON.parse(this.responseText);
      if (myArr.length !== 0) {
        alert('Atualizações realizadas');
      } else {
        alert('Não foi possível realizar as alterações');
      }
    }
  };
  xhrUpdate.send(data);
}

formularioDadosCliente.addEventListener('submit', updateUser);
