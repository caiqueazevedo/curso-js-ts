let num1 = 5;
let num2 = 10;

let soma = num1 + num2;
let subtracao = num2 - num1;
let multiplicacao = num1 * num2;
let divisao = num2 / num1;
let restoDaDivisao = num2 % num1;

let potencia = num1 ** num2;

let contador = 1;
// incrementa antes - exibe depois
++contador;
console.log(contador);
// exibe antes - incrementa depois
contador++;
console.log(contador);
contador += 2;
console.log(contador);
contador *= 2;
console.log(contador);
contador **= 2;
console.log(contador);


let num3 = '5';
console.log(num1 + (parseFloat('5.2')));
console.log(num1 + (parseInt('5')));
console.log(num1 + (Number('5')));
console.log(num1 + (Number('5.10')));