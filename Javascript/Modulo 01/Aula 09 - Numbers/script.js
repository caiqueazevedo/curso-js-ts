let num1 = 1;
let num2 = 2.5;

// Alterar para string
let num3 = 3;
num3 = num3.toString();

//soma os números
console.log(num1 + num2);
// concatena os números
console.log(num1.toString() + num2);
// Mostra o binário
console.log(num2.toString(2));
// Precisão, mostra casas decimais
console.log(num2.toFixed(4));
// Checar se é inteiro
console.log(Number.isInteger(num1));
// Not a Number - is not a number? Se for inválido retorna true
let num4 = num3 * num1
console.log(Number.isNaN(num4));


// -----------------------------------------------------
// ---------- Trabalhando com ponto flutuante ----------
// -----------------------------------------------------
console.log('-------------------------------------------')

let num10 = 0.5;
let num11 = 0.4;
let result = num10 + num11;
console.log(result)

result = parseFloat(num10.toFixed(2));
console.log(result)