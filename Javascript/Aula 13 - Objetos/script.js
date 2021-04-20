// Objeto Literal

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`)
    },

    falaIdade() {
        console.log(`A minha idade é: ${this.idade}`)
    },

    incrementaIdade() {
        this.idade++;
    }
};

console.log(pessoa.nome);
pessoa.fala();
pessoa.falaIdade();
pessoa.incrementaIdade();
pessoa.falaIdade();

// Função
function criarPessoa(nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade
    }
}

const pessoa1 = criarPessoa('Caique', 'Matheus', 27);
const pessoa2 = criarPessoa('Adriana', 'Oliveira', 22);
const pessoa3 = criarPessoa('Luiz', 'Miranda', 25);