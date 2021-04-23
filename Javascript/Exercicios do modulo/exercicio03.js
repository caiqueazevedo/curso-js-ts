/*
Escreva uma função que recebe um número e retorne o seguinte:
Número é divisível por 3 = Fizz
Número é divisível por 5 = Buzz
Número é divisível por 3 e 6 = FizzBuzz
Número nãoi é divisível por 3 e 5 = Retorna o próprio número
Checar se o número é realmente um número = Retorna o próprio número
Use a função com números entre 0 e 100
*/

function fizzBuzz(number) {
    const div3 = number % 3;
    const div5 = number % 5;

    if (Number.isInteger(number)) {
        if (number !== 0 && div3 == 0 && div5 == 0) return 'FizzBuzz';
        if (number !== 0 && div3 == 0) return 'Fizz';
        if (number !== 0 && div5 == 0) return 'Buzz';
        if (div3 !== 0 && div5 !== 0 || number == 0) return number;
    }
    return console.log(`${number} deve ser um número.`);
}
for (let i = 0; i <= 100; i++) {
    console.log(`(${i}) ${fizzBuzz(i)}`);
};