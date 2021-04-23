/* 
Luiz Otávio Miranda tem 30 anos, pesa 84kg
tem 1.8 de altura e seu IMC é de 25.925925925925924
Luiz Otávio nasceu em 1980
*/

const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const altura = 1.80;
let imc = peso / (altura * altura);
let anoNascimento = 2021 - idade;
let nomeCompleto = nome + ' ' + sobrenome;


console.log(
nomeCompleto, 'tem', idade, 'anos, pesa', peso, 'kg\n',
'tem', altura, 'de altura e seu IMC é de', imc, '\n',
nome, 'nasceu em', anoNascimento)

console.log(`${nomeCompleto}, tem ${idade} anos, pesa ${peso}kg, tem ${altura} de altura e seu IMC é de ${imc}. 
${nome} nasceu em ${anoNascimento}`)