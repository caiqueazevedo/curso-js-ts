function dizOi() {
  console.log(arguments)
}

dizOi('oi', 1, 2, 3, 4, 5, 6, 7)

function func(a, b = 2, c = 4) {
  console.log(a + b + c)
}
func(2, undefined, 10)

function desestruturacao({ nome, sobrenome, idade }) {
  console.log(nome, sobrenome, idade)
}

desestruturacao({ nome: 'Caique', sobrenome: 'Matheus', idade: 27 })


// rest operator (...restOperator) precisa obrigatoriamente ser o ultimo parâmetro
function conta(operador, acumulador, ...numeros) {
  for (let numero of numeros) {
    if (operador === '+') acumulador += numero;
    if (operador === '-') acumulador -= numero;
    if (operador === '/') acumulador /= numero;
    if (operador === '*') acumulador *= numero;
    console.log(numero)
  }
  console.log(acumulador)
}
conta('+', 0, 20, 30, 50, 60)

const teste = (...args) => {
  console.log(args);
};
teste('+', 1, 2, 3, 4, 5, 6)