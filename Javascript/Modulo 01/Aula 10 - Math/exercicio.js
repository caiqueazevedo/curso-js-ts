const number = Number(prompt('Digite um número:'));
const titleNumber = document.getElementById('numero-escolhido');
const raiz = document.getElementById('raiz');
const int = document.getElementById('inteiro');
const notANumber = document.getElementById('nan');
const down = document.getElementById('arredonda-baixo');
const up = document.getElementById('arredonda-cima');
const decimal = document.getElementById('casas-decimais');

titleNumber.innerHTML = number;
raiz.innerHTML = `<p>Raiz quadrada: ${(number ** 0.5).toFixed(2)}</p>`;
int.innerHTML = `<p>${number} é inteiro?: ${Number.isInteger(number)}</p>`;
notANumber.innerHTML = `<p>NaN?: ${isNaN(number)}</p>`;
down.innerHTML = `<p>Arredondando para baixo: ${Math.floor(number)}</p>`;
up.innerHTML = `<p>Arredondando para cima: ${Math.ceil(number)}</p>`;
decimal.innerHTML = `<p>Com duas casas decimais: ${number.toFixed(2)}</p>`;



const text = document.getElementById('text');
text.innerHTML += `<p>Raiz quadrada: ${(number ** 0.5).toFixed(2)}</p>`;
text.innerHTML += `<p>${number} é inteiro?: ${Number.isInteger(number)}</p>`;
text.innerHTML += `<p>NaN?: ${isNaN(number)}</p>`;
text.innerHTML += `<p>Arredondando para baixo: ${Math.floor(number)}</p>`;
text.innerHTML += `<p>Arredondando para cima: ${Math.ceil(number)}</p>`;
text.innerHTML += `<p>Com duas casas decimais: ${number.toFixed(2)}</p>`;