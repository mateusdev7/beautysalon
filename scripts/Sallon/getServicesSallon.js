function getDataSallon() {
  const xhr = new XMLHttpRequest();
  const url = 'http://127.0.0.1:5001/getServicesSallon';

  // eslint-disable-next-line func-names
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const myArr = JSON.parse(this.responseText);
      if (myArr.length !== 0) {
        myArr.arrayProfessionals.forEach((professional) => {
          console.log(professional);
        });
      }
    }
  };
  xhr.open('GET', url, true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send();
}
getDataSallon();
