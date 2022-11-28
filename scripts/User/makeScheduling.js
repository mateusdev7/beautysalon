const resultValue = document.querySelector('.valor-result');
const allInputsCheckbox = document.querySelectorAll('input[type="checkbox"]');
function limparPreco(preco) {
  preco = +preco.toUpperCase().replace('R$', '').trim().replace(',', '.');
  preco = +preco.toFixed(2);
  return preco;
}

let soma = 0;
allInputsCheckbox.forEach((item) => {
  item.addEventListener('change', () => {
    if (item.checked) {
      soma += limparPreco(item.value);
    } else {
      soma -= limparPreco(item.value);
    }
    resultValue.textContent = soma.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  });
});

function limparData(data) {
  if (data.includes('-')) {
    data = data.replaceAll('-', '');
  }
  return data;
}

const formDataAgendamento = document.querySelector('.form-data-agendamento');
const data = document.getElementById('dataAgendamento');
const resultData = document.querySelector('.data-result');

formDataAgendamento.addEventListener('change', () => {
  const year = limparData(data.value).substring(0, 4);
  const month = limparData(data.value).substring(4, 6);
  const day = limparData(data.value).substring(6, 8);
  resultData.textContent = `${day}/${month}/${year}`;
});

const hora = document.getElementById('horaAgendamento');
const horaResult = document.querySelector('.hora-result');
const formHoraAgendamento = document.querySelector('.form-hora-agendamento');
formHoraAgendamento.addEventListener('change', () => {
  horaResult.textContent = hora.value;
});

const leftContainer = document.querySelector('.left-container-salao-agendamento');
const allProfessional = leftContainer.querySelectorAll('.container-professional');

allProfessional.forEach((card) => {
  card.addEventListener('click', () => {
    allProfessional.forEach((item) => {
      item.classList.remove('selecionado');
    });
    card.classList.add('selecionado');
  });
});
