const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: '30',
    endereco: {
        rua: 'Av Paulista',
        numero: 1030
    }
};

const { nome, sobrenome, idade } = pessoa;
console.log(nome, sobrenome);

// Atribuição via desestruturação
const { nome: x = 'João' } = pessoa; // se a variável 'nome' não existir em 'pessoa', então o nome será joão.
console.log(x)

const { endereco: { rua = 'Endereço 02', numero = '1050' }, endereco } = pessoa;
console.log(rua, numero, endereco)