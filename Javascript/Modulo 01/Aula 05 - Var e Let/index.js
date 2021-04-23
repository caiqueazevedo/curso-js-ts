// Var só tem escopo de função

var nome = "Luiz"; // declarada

// Let tem escopo de bloco { ... isso é um bloco}

let nome2 = 'Luiz'; // declarada

console.log(nome, nome2);

if (true) {
    var nome = 'Otávio'; // valor global substituido
    let nome2 = 'Otávio'; // redeclarada dentro do bloco apenas
    console.log(nome, nome2)
}

console.log(nome, nome2)