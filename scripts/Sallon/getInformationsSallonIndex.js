const listBarbearia = document.querySelector('.barbearia-lista');

function createSallon(nameSallon, address) {
  const li = document.createElement('li');
  const img = document.createElement('img');
  img.src = './imagens/main_barbearias/barbearia4.png';
  const containerSallon = document.createElement('div');
  containerSallon.classList.add('barbearia-informacao');
  const h3 = document.createElement('h3');
  h3.classList.add('font-p-semibold');
  h3.classList.add('destaque');
  h3.textContent = nameSallon;
  const p = document.createElement('p');
  p.classList.add('font-f-regular');
  p.classList.add('black7');
  p.textContent = address;
  const a = document.createElement('a');
  a.href = './templates/salao/salao.html';
  a.target = '_blank';
  a.classList.add('botao-conhecer');
  a.classList.add('type1');
  a.classList.add('font-p-semibold');
  a.textContent = 'Conhecer';
  li.appendChild(img);
  li.appendChild(containerSallon);
  containerSallon.appendChild(h3);
  containerSallon.appendChild(p);
  containerSallon.appendChild(a);
  listBarbearia.appendChild(li);
  return li;
}

function getServicesSallon() {
  const xhr = new XMLHttpRequest();
  const url = 'http://127.0.0.1:5001/searchAllSallon';

  // eslint-disable-next-line func-names
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const myArr = JSON.parse(this.responseText);
      if (myArr.length !== 0) {
        myArr.forEach((item) => {
          createSallon(item.nameSallon, item.address);
        });
      }
    }
  };
  xhr.open('GET', url, true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send();
}
getServicesSallon();
