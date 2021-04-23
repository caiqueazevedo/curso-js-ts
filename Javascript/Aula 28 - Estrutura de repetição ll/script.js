// For clássico - Iterables (array ou string)
// For in - índice ou chave (string, array ou object)
// For of - retorna o valor Iterable (array ou string)

const frutas = ['Pera', 'Maça', 'Uva', 'Melância'];

const pessoa = {
    nome: 'Caique',
    sobrenome: 'Matheus',
    idade: 27
};

for (let i in frutas) {
    console.log(frutas[i])
}

for (let i in pessoa) {
    console.log(i, pessoa[i])
}

for (let i of frutas) {
    console.log(i)
}


frutas.forEach((valor, indice, array) => { console.log(valor, indice, array) })